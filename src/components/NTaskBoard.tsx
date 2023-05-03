import { ClipboardText, PlusCircle } from '@phosphor-icons/react'

import { ChangeEvent, FormEvent, useState } from 'react'

import { v4 as uuid } from 'uuid'
import { NTaskItem } from '.'

interface ITask {
  id: string
  description: string
  isCompleted: boolean
}
export const NTaskBoard = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const [newTask, setNewTask] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newTasks = {
      id: uuid(),
      description: newTask,
      isCompleted: false,
    }

    setTasks((prevState) => [...prevState, newTasks])

    setNewTask('')
  }

  const handleDeleteTask = (id: string) => {
    const tasksWithouDeletedOne = tasks.filter((task) => task.id !== id)

    setTasks(tasksWithouDeletedOne)
  }

  const handleToggleCompleteTask = (id: string) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    )
  }

  return (
    <>
      <form
        className="relative -top-8 flex flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <input
          value={newTask}
          onChange={handleInputChange}
          type="text"
          required
          placeholder="Adicione uma nova tarefa"
          className="p-4 bg-gray-500 text-gray-100 rounded-lg border border-gray-400 outline-none focus:border focus:border-primary-dark placeholder:text-gray-300"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-x-2 p-4 bg-secondary-dark rounded-lg outline-none transition-colors hover:bg-secondary-soft focus:bg-secondary-soft"
        >
          <span className="font-bold text-white">Criar</span>
          <PlusCircle
            className="fill-gray-100"
            weight="bold"
            width={20}
            height={20}
          />
        </button>
      </form>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <span className="text-secondary-soft font-bold">Tarefas criadas</span>
          <span className="bg-gray-400 px-2 rounded-full text-gray-200 font-bold">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-primary-soft font-bold">Concluídas</span>
          <span className="bg-gray-400 px-2 rounded-full text-gray-200 font-bold">
            {tasks.filter((task) => task.isCompleted).length}
          </span>
        </div>
      </div>
      {tasks.length > 0 ? (
        <ul className="flex flex-col gap-y-3">
          {tasks.map((task) => (
            <NTaskItem
              key={task.id}
              id={task.id}
              description={task.description}
              isCompleted={task.isCompleted}
              onDelete={() => handleDeleteTask(task.id)}
              onToggle={() => handleToggleCompleteTask(task.id)}
            />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col justify-center items-center py-6">
          <ClipboardText className="fill-gray-300" width={56} height={56} />
          <p className="mt-4 text-gray-300 text-sm font-bold sm:text-base">
            Você ainda não tem tarefas cadastradas
          </p>
          <p className="text-gray-300 text-sm sm:text-base">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  )
}
