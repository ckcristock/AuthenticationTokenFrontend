import { Component, OnInit, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly isEditMode = signal(false);
  protected readonly taskId = signal<number | null>(null);

  protected readonly taskForm = this.fb.nonNullable.group({
    titulo: ['', [Validators.required, Validators.maxLength(100)]],
    descripcion: ['', [Validators.required, Validators.maxLength(500)]],
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode.set(true);
      this.taskId.set(Number(id));
      this.loadTask(Number(id));
    }
  }

  private loadTask(id: number): void {
    this.loading.set(true);
    this.taskService.getTask(id).subscribe({
      next: (task) => {
        this.taskForm.patchValue({
          titulo: task.titulo,
          descripcion: task.descripcion,
        });
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar la tarea');
        this.loading.set(false);
        console.error('Error loading task:', err);
      },
    });
  }

  protected onSubmit(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    const taskData = this.taskForm.getRawValue();

    const request$ = this.isEditMode()
      ? this.taskService.updateTask(this.taskId()!, taskData)
      : this.taskService.createTask(taskData);

    request$.subscribe({
      next: () => {
        this.router.navigate(['/tasks']);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(
          this.isEditMode() ? 'Error al actualizar la tarea' : 'Error al crear la tarea',
        );
        console.error('Error saving task:', err);
      },
    });
  }

  protected cancel(): void {
    this.router.navigate(['/tasks']);
  }

  protected getFieldError(fieldName: string): string | null {
    const field = this.taskForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (field?.hasError('maxlength')) {
      const maxLength = field.getError('maxlength').requiredLength;
      return `Máximo ${maxLength} caracteres`;
    }
    return null;
  }

  protected isFieldInvalid(fieldName: string): boolean {
    const field = this.taskForm.get(fieldName);
    return !!(field?.invalid && (field?.dirty || field?.touched));
  }
}
