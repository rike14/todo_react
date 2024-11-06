import { ITask } from '../interfaces/Task';
import styles from './TaskList.module.css';

interface ITaskListProps {
  taskList: ITask[]
  handleDelete(id: number): void
}

const TaskList = ({taskList, handleDelete}: ITaskListProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Difficulty: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil'></i>
              <i className='bi bi-trash' onClick={() => {handleDelete(task.id)}}></i>
            </div>
          </div>
        ))
      ) 
      : 
      (
        <p>Task list is empty!</p>
      )}
    </>
  )
};

export default TaskList;
