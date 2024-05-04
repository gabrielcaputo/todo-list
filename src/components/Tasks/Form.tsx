import styles from './Tasks.module.css'
import { TaskProps } from './Tasks';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

interface FormProps {
  onTaskAdd: (task: TaskProps) => void;
}

export function Form({ onTaskAdd }: FormProps) {

  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onTaskAdd({
      id: uuidv4(),
      isComplete: false,
      content: newTask
    })
    setNewTask('')
  }

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={newTask}
        onChange={handleNewTaskChange}
        required
      />
      <button type="submit" disabled={newTask.length === 0}>
        Criar
        <PlusCircle />
      </button>
    </form>
  )
}