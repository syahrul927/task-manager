"use server";

import { TaskRepositoryImpl } from "../data/repositories/task.repository.impl";
import { CreateTaskInput, UpdateTaskInput } from "../domain/entities/task";
import { TaskUseCases } from "../domain/usecases/task.usecases";

const taskRepository = new TaskRepositoryImpl();
const taskUseCase = new TaskUseCases(taskRepository);

export async function getAllTasksAction() {
  return taskUseCase.getAllTasks();
}
export async function createTaskAction(input: CreateTaskInput) {
  return taskUseCase.createTask(input);
}

export async function updateTaskAction(id: string, input: UpdateTaskInput) {
  return taskUseCase.updateTask(id, input);
}

export async function deleteTaskAction(id: string) {
  return taskUseCase.deleteTask(id);
}

export async function getTasksByStatusAction(status: string) {
  return taskUseCase.getTasksByStatus(status);
}
