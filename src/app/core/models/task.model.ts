export interface Task {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  fechaCreacion: string;
  fechaActualizacion: string | null;
}

export interface CreateTaskRequest {
  titulo: string;
  descripcion: string;
}

export interface UpdateTaskRequest {
  titulo?: string;
  descripcion?: string;
  completada?: boolean;
}

export interface TaskResponse {
  success: boolean;
  message: string;
  data: Task | Task[];
}
