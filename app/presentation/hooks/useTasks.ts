"use client";

import { useState, useEffect } from "react";
import {
  getAllTasksAction,
  getTasksByStatusAction,
  createTaskAction,
  updateTaskAction,
  deleteTaskAction,
} from "@/app/actions/tasks";
import { Task } from "@/app/domain/entities/task";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  const loadTasks = async () => {
    setLoading(true);
    try {
      const allTasks =
        filter === "all"
          ? await getAllTasksAction()
          : await getTasksByStatusAction(filter);
      setTasks(allTasks);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (title: string, description?: string) => {
    try {
      await createTaskAction({ title, description });
      await loadTasks();
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const updateTask = async (id: string, updates: Partial<Task>) => {
    try {
      await updateTaskAction(id, updates);
      await loadTasks();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await deleteTaskAction(id);
      await loadTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [filter]);

  return {
    tasks,
    loading,
    filter,
    setFilter,
    createTask,
    updateTask,
    deleteTask,
  };
}
