import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { LoginRequest, LoginResponse, User } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly apiUrl = environment.apiUrl;

  private readonly USER_KEY = 'auth_user';

  private readonly currentUserSignal = signal<User | null>(this.getUserFromStorage());
  private readonly tokenSignal = signal<string | null>(this.getTokenFromUser());

  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly token = this.tokenSignal.asReadonly();
  readonly isAuthenticated = computed(() => !!this.tokenSignal());

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap((response) => {
        if (response.success && response.data) {
          this.setSession(response.data);
        }
      }),
      catchError((error) => {
        console.error('Error en login:', error);
        return throwError(() => error);
      }),
    );
  }

  logout(): void {
    this.clearSession();
    this.router.navigate(['/login']);
  }

  private setSession(user: User): void {
    // Solo guardamos el objeto user completo (ya incluye el token)
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.tokenSignal.set(user.token);
    this.currentUserSignal.set(user);
  }

  private clearSession(): void {
    // Solo limpiamos el objeto user
    localStorage.removeItem(this.USER_KEY);
    // Limpiamos cualquier token residual de versiones anteriores
    localStorage.removeItem('auth_token');
    localStorage.removeItem('access_token');
    this.tokenSignal.set(null);
    this.currentUserSignal.set(null);
  }

  private getTokenFromUser(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userJson = localStorage.getItem(this.USER_KEY);
      if (userJson) {
        const user = JSON.parse(userJson);
        return user?.token || null;
      }
    }
    return null;
  }

  private getUserFromStorage(): User | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userJson = localStorage.getItem(this.USER_KEY);
      return userJson ? JSON.parse(userJson) : null;
    }
    return null;
  }
}
