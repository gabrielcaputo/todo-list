import styles from './Tasks.module.css'
import { useState } from 'react'
import { Form } from './Form';
import { List } from './List';

export interface Task {
  id: string;
  isComplete: boolean;
  content: string;
}

export function Tasks() {

  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(task: Task) {
    setTasks((state) => {
      return [
        ...state,
        task
      ]
    })
  }

  function deleteTask(task: Task) {
    setTasks((state) => {
      return state.filter(t => t != task)
    })
  }

  function completeTask(task: Task) {
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



