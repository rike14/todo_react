import styles from './TaskForm.module.css';

import { ChangeEvent, FormEvent, useState } from 'react';
import { ITask } from '../interfaces/Task';

interface ITaskFormProps {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: ITaskFormProps) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = { id, title, difficulty }

    setTaskList!([...taskList, newTask])

    setTitle("")
    setDifficulty(0)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title'){
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Title:</label>
        <input 
          type="text" 
          name='title' 
          placeholder='Task title' 
          onChange={handleChange} 
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='difficulty'>Difficulty:</label>
        <input 
          type="text" 
          name='difficulty' 
          placeholder='Difficulty task' 
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
};

export default TaskForm;
