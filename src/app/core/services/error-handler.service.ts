import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandlerService {
  static handleError(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      return `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      switch (error.status) {
        case 400:
          return error.error?.message || 'Solicitud incorrecta';
        case 401:
          return 'No autorizado. Por favor, inicia sesión nuevamente';
        case 403:
          return 'No tienes permiso para realizar esta acción';
        case 404:
          return 'Recurso no encontrado';
        case 500:
          return 'Error interno del servidor. Por favor, intenta más tarde';
        default:
          return error.error?.message || 'Ocurrió un error inesperado';
      }
    }
  }
}
