import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task, CreateTaskRequest, UpdateTaskRequest, TaskResponse } from '../models/task.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/tareas`;

  getTasks(): Observable<Task[]> {
    return this.http
      .get<TaskResponse>(this.apiUrl)
      .pipe(map((response) => (Array.isArray(response.data) ? response.data : [])));
  }

  getTask(id: number): Observable<Task> {
    return this.http
      .get<TaskResponse>(`${this.apiUrl}/${id}`)
      .pipe(map((response) => response.data as Task));
  }

  createTask(task: CreateTaskRequest): Observable<Task> {
    return this.http
      .post<TaskResponse>(this.apiUrl, task)
      .pipe(map((response) => response.data as Task));
  }

  updateTask(id: number, task: UpdateTaskRequest): Observable<Task> {
    return this.http
      .put<TaskResponse>(`${this.apiUrl}/${id}`, task)
      .pipe(map((response) => response.data as Task));
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleTaskStatus(id: number, completada: boolean): Observable<Task> {
    return this.http
      .put<TaskResponse>(`${this.apiUrl}/${id}`, { completada })
      .pipe(map((response) => response.data as Task));
  }
}
