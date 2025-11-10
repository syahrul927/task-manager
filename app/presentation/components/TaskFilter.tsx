'use client';

interface TaskFilterProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

export function TaskFilter({ filter, onFilterChange }: TaskFilterProps) {
  const filters = [
    { value: 'all', label: 'All Tasks' },
    { value: 'to do', label: 'To Do' },
    { value: 'in progress', label: 'In Progress' },
    { value: 'done', label: 'Done' }
  ];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`px-4 py-2 rounded-lg font-medium ${
            filter === f.value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}