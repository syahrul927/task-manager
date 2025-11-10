"use client";

import { Task } from "@/app/domain/entities/task";

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (id: string, updates: Partial<Task>) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, onUpdateTask, onDeleteTask }: TaskListProps) {
  const statusColors = {
    "to do": "bg-gray-100 text-gray-800",
    "in progress": "bg-blue-100 text-blue-800",
    done: "bg-green-100 text-green-800",
  };

  const getStatusColor = (status: string) => {
    return (
      statusColors[status as keyof typeof statusColors] ||
      "bg-gray-100 text-gray-800"
    );
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No tasks found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-6 rounded-lg border border-gray-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {task.title}
              </h3>
              {task.description && (
                <p className="text-gray-600 mb-3">{task.description}</p>
              )}

              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}
                >
                  {task.status}
                </span>

                <select
                  value={task.status}
                  onChange={(e) =>
                    onUpdateTask(task.id, { status: e.target.value as any })
                  }
                  className="text-sm px-3 py-1 border border-gray-300 rounded-lg"
                >
                  <option value="to do">To Do</option>
                  <option value="in progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => onDeleteTask(task.id)}
              className="ml-4 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
