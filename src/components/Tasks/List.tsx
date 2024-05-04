import styles from './Tasks.module.css'
import { Task } from "./Tasks";
import { Check, Notepad, Trash } from 'phosphor-react';

interface ListProps {
  tasks: Task[];
  onTaskComplete: (task: Task) => void;
  onTaskDelete: (task: Task) => void;
}

export function List({ tasks, onTaskComplete, onTaskDelete }: ListProps) {

  function handleTaskComplete(task: Task) {
    onTaskComplete(task)
  }

  function handleTaskDelete(task: Task) {
    onTaskDelete(task)
  }

  return (
    <>
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
      
      {
        tasks.length > 0 ?
          <div className={styles.list}>
            {
              tasks.map(task => 
                <div className={styles.task} key={task.id}>
                  <input id={task.id} type="checkbox" checked={task.isComplete} onChange={() => handleTaskComplete(task)} />
                  <label htmlFor={task.id}>
                    {task.isComplete && <Check />}
                  </label>
                  <div className={task.isComplete ? styles.striked : ''}>{task.content}</div>
                  <button onClick={() => handleTaskDelete(task)}>
                    <Trash />
                  </button>
                </div>
              )
            }
          </div> :
          <div className={styles.noContent}>
            <Notepad weight='thin' size={64} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
      }
    </>
  )
}