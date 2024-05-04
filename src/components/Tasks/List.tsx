import styles from './Tasks.module.css'
import { TaskProps } from "./Tasks";
import { Check, Notepad, Trash } from 'phosphor-react';

interface ListProps {
  tasks: TaskProps[];
  onTaskComplete: (task: TaskProps) => void;
  onTaskDelete: (task: TaskProps) => void;
}

interface Task {
  task: TaskProps
}

export function List({ tasks, onTaskComplete, onTaskDelete }: ListProps) {

  function handleTaskComplete(task: TaskProps) {
    onTaskComplete(task)
  }

  function handleTaskDelete(task: TaskProps) {
    onTaskDelete(task)
  }

  function strikedClass(task: TaskProps) {
    return task.isComplete ? styles.striked : ''
  }

  function Header() {
    return (
      <div className={styles.header}>
        <div className={styles.tasksCreated}>
          Tarefas criadas
          <span>{tasks.length}</span>
        </div>
        <div className={styles.tasksCompleted}>
          Concluídas
          <span>{
            tasks.length > 0 ? `${tasks.filter(task => task.isComplete).length} de ${tasks.length}` : 0
          }</span>
        </div>
      </div>   
    )
  }

  function Tasks() {
    return (
      <div className={styles.list}>
        {
          tasks.map(task => 
            <Task task={task} />
          )
        }
      </div>
    )
  }

  function Task({ task }: Task) {
    return (
      <div className={styles.task} key={task.id}>
        <input id={task.id} type="checkbox" checked={task.isComplete} onChange={() => handleTaskComplete(task)} />
        <label htmlFor={task.id}>
          {task.isComplete && <Check />}
        </label>
        <div className={strikedClass(task)}>{task.content}</div>
        <button onClick={() => handleTaskDelete(task)}>
          <Trash />
        </button>
      </div>
    )
  }

  function NoContent() {
    return (
      <div className={styles.noContent}>
        <Notepad weight='thin' size={64} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    )
  }

  return (
    <>
      <Header />
      {tasks.length > 0
        ? <Tasks />
        : <NoContent />
      }
    </>
  )
}