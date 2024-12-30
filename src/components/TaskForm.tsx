import styles from './TaskForm.module.css';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ITask } from '../interfaces/Task';

interface ITaskFormProps {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id:number, title:string, difficulty:number): void;
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: ITaskFormProps) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number | null>(null)

  useEffect(() => {
    if(task){
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (title === '' || (difficulty === null || isNaN(difficulty))) {
      toast.error('Please fill all fields')
      return false
    }

    if(handleUpdate){
      handleUpdate(id, title, difficulty)
      toast.success('Task updated successfully')
    } else {
      const id = Math.floor(Math.random() * 1000)
      const newTask: ITask = { id, title, difficulty }

      setTaskList!([...taskList, newTask])

      setTitle("")
      setDifficulty(null)
      toast.success('Task added successfully')
    }
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
          type="number" 
          name='difficulty' 
          placeholder='Difficulty task' 
          onChange={handleChange}
          value={difficulty ?? ''}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
};

export default TaskForm;
