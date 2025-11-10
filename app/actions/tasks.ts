"use server";

import { TaskRepositoryImpl } from "../data/repositories/task.repository.impl";
import { CreateTaskInput, UpdateTaskInput } from "../domain/entities/task";

const taskRepository = new TaskRepositoryImpl();

export async function getAllTasksAction() {
  return taskRepository.getAll();
}

export async function getTaskByIdAction(id: string) {
  return taskRepository.getById(id);
}

export async function createTaskAction(input: CreateTaskInput) {
  return taskRepository.create(input);
}

export async function updateTaskAction(id: string, input: UpdateTaskInput) {
  return taskRepository.update(id, input);
}

export async function deleteTaskAction(id: string) {
  return taskRepository.delete(id);
}

export async function getTasksByStatusAction(status: string) {
  return taskRepository.getByStatus(status);
}
