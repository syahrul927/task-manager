import { Task, CreateTaskInput, UpdateTaskInput } from '../entities/task';
import { TaskRepository } from '../repositories/task.repository';

export class TaskUseCases {
  constructor(private taskRepository: TaskRepository) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.getAll();
  }

  async getTaskById(id: string): Promise<Task | null> {
    return this.taskRepository.getById(id);
  }

  async createTask(input: CreateTaskInput): Promise<Task> {
    return this.taskRepository.create({
      ...input,
      status: input.status || 'to do'
    });
  }

  async updateTask(id: string, input: UpdateTaskInput): Promise<Task> {
    const existingTask = await this.taskRepository.getById(id);
    if (!existingTask) {
      throw new Error('Task not found');
    }
    return this.taskRepository.update(id, input);
  }

  async deleteTask(id: string): Promise<void> {
    const existingTask = await this.taskRepository.getById(id);
    if (!existingTask) {
      throw new Error('Task not found');
    }
    return this.taskRepository.delete(id);
  }

  async getTasksByStatus(status: string): Promise<Task[]> {
    return this.taskRepository.getByStatus(status);
  }
}