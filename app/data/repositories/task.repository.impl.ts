import { PrismaClient } from "@prisma/client";
import { TaskRepository } from "../../domain/repositories/task.repository";
import {
  Task,
  CreateTaskInput,
  UpdateTaskInput,
} from "../../domain/entities/task";

const prisma = new PrismaClient();

export class TaskRepositoryImpl implements TaskRepository {
  async getAll(): Promise<Task[]> {
    const tasks = await prisma.task.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description || undefined,
      status: task.status as any,
    }));
  }

  async getById(id: string): Promise<Task | null> {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) return null;

    return {
      id: task.id,
      title: task.title,
      description: task.description || undefined,
      status: task.status as any,
    };
  }

  async create(input: CreateTaskInput): Promise<Task> {
    const task = await prisma.task.create({
      data: {
        title: input.title,
        description: input.description,
        status: input.status || "to do",
      },
    });

    return {
      id: task.id,
      title: task.title,
      description: task.description || undefined,
      status: task.status as any,
    };
  }

  async update(id: string, input: UpdateTaskInput): Promise<Task> {
    const task = await prisma.task.update({
      where: { id },
      data: input,
    });

    return {
      id: task.id,
      title: task.title,
      description: task.description || undefined,
      status: task.status as any,
    };
  }

  async delete(id: string): Promise<void> {
    await prisma.task.delete({
      where: { id },
    });
  }

  async getByStatus(status: string): Promise<Task[]> {
    const tasks = await prisma.task.findMany({
      where: { status },
      orderBy: {
        id: "desc",
      },
    });

    return tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description || undefined,
      status: task.status as any,
    }));
  }
}
