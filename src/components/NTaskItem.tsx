import { Check, Trash } from '@phosphor-icons/react'

interface ITaskItem {
  id: string
  description: string
  isCompleted: boolean
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export const NTaskItem = ({
  id,
  description,
  isCompleted,
  onDelete,
  onToggle,
}: ITaskItem) => {
  const handleDelete = () => {
    onDelete(id)
  }

  const handleToggle = () => {
    onToggle(id)
  }

  return (
    <li
      className={`p-4 flex flex-1 items-start justify-between gap-x-3 bg-gray-500 border rounded-lg ${
        isCompleted ? 'border-gray-500' : 'border-gray-400'
      }`}
    >
      <label htmlFor={id} className="cursor-pointer relative">
        <input
          checked={isCompleted}
          onChange={handleToggle}
          type="checkbox"
          id={id}
          className="sr-only peer"
        />
        <Check
          className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 peer-checked:block peer-checked:fill-gray-100"
          weight={'bold'}
          width={12}
          height={12}
        />
        <span className="block w-6 h-6 border-2 border-secondary-soft rounded-full peer-checked:bg-primary-soft peer-checked:border-primary-soft transition-colors"></span>
      </label>
      <span
        className={`flex-1 ${
          isCompleted ? 'text-gray-300 line-through' : 'text-gray-100'
        }`}
      >
        {description}
      </span>

      <button
        type="button"
        aria-label="Delete task"
        onClick={handleDelete}
        className="p-1.5 flex items-center justify-center rounded transition-colors group hover:bg-gray-400"
      >
        <Trash
          className="fill-gray-300 transition-colors group-hover:fill-danger"
          width={24}
          height={24}
        />
      </button>
    </li>
  )
}
