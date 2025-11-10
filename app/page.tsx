"use client";

import { TaskFilter } from "./presentation/components/TaskFilter";
import { TaskForm } from "./presentation/components/TaskForm";
import { TaskList } from "./presentation/components/TaskList";
import { useTasks } from "./presentation/hooks/useTasks";
import { AuthGuard } from "./components/AuthGuard";
import { SignOutButton } from "./components/SignOutButton";

export default function Home() {
  const {
    tasks,
    loading,
    filter,
    setFilter,
    createTask,
    updateTask,
    deleteTask,
  } = useTasks();

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Task Manager
            </h1>
            <div className="flex justify-center mt-4">
              <SignOutButton />
            </div>
          </header>

          <main className="space-y-6">
            <TaskForm onSubmit={createTask} />

            <TaskFilter filter={filter} onFilterChange={setFilter} />

            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Loading tasks...</p>
              </div>
            ) : (
              <TaskList
                tasks={tasks}
                onUpdateTask={updateTask}
                onDeleteTask={deleteTask}
              />
            )}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
