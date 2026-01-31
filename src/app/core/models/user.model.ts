export interface User {
  id: number;
  usuario: string;
  token: string;
  fechaExpiracion: string;
}

export interface LoginRequest {
  usuario: string;
  contrasena: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: User;
}
