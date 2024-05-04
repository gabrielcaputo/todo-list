import styles from './Tasks.module.css'
import { useState } from 'react'
import { Form } from './Form';
import { List } from './List';

export interface TaskProps {
  id: string;
  isComplete: boolean;
  content: string;
}

export function Tasks() {

  const [tasks, setTasks] = useState<TaskProps[]>([])

  function addTask(task: TaskProps) {
    setTasks((state) => {
      return [
        ...state,
        task
      ]
    })
  }

  function deleteTask(task: TaskProps) {
    setTasks((state) => {
      return state.filter(t => t != task)
    })
  }

  function completeTask(task: TaskProps) {
    setTasks(tasks.map(t => {
      if (t.id === task.id) {
        t.isComplete = !t.isComplete
      }
      return t
    }))
  }

  return (
    <section className={styles.wrapper}>
      <Form onTaskAdd={addTask}/>
      <List
        tasks={tasks}
        onTaskDelete={deleteTask}
        onTaskComplete={completeTask}
      />
    </section>
  )
}



