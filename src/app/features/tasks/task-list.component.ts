import { Component, OnInit, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Task } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  private readonly taskService = inject(TaskService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly tasks = signal<Task[]>([]);
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly currentUser = this.authService.currentUser;

  ngOnInit(): void {
    this.loadTasks();
  }

  protected loadTasks(): void {
    this.loading.set(true);
    this.error.set(null);

    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks.set(tasks);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar las tareas');
        this.loading.set(false);
        console.error('Error loading tasks:', err);
      },
    });
  }

  protected createTask(): void {
    this.router.navigate(['/tasks/new']);
  }

  protected editTask(id: number): void {
    this.router.navigate(['/tasks', id, 'edit']);
  }

  protected toggleTaskStatus(task: Task): void {
    const updatedTask = {
      titulo: task.titulo,
      descripcion: task.descripcion,
      completada: !task.completada
    };
    
    this.taskService.updateTask(task.id, updatedTask).subscribe({
      next: (result) => {
        this.tasks.update((tasks) => tasks.map((t) => (t.id === result.id ? result : t)));
      },
      error: (err) => {
        this.error.set('Error al actualizar el estado de la tarea');
        console.error('Error toggling task:', err);
      },
    });
  }

  protected deleteTask(task: Task): void {
    if (!confirm(`¿Estás seguro de eliminar la tarea "${task.titulo}"?`)) {
      return;
    }

    this.taskService.deleteTask(task.id).subscribe({
      next: () => {
        this.tasks.update((tasks) => tasks.filter((t) => t.id !== task.id));
      },
      error: (err) => {
        this.error.set('Error al eliminar la tarea');
        console.error('Error deleting task:', err);
      },
    });
  }

  protected logout(): void {
    this.authService.logout();
  }
}
