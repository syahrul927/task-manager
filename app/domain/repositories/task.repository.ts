import { Task, CreateTaskInput, UpdateTaskInput } from '../entities/task';

export interface TaskRepository {
  getAll(): Promise<Task[]>;
  getById(id: string): Promise<Task | null>;
  create(input: CreateTaskInput): Promise<Task>;
  update(id: string, input: UpdateTaskInput): Promise<Task>;
  delete(id: string): Promise<void>;
  getByStatus(status: string): Promise<Task[]>;
}