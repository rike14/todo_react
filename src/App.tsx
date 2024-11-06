import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import styles from "./App.module.css";

import { ITask } from "./interfaces/Task";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What are you going to do?</h2>
          <TaskForm 
            btnText="Create Task" 
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Your Tasks</h2>
          <TaskList 
            taskList={taskList}
            handleDelete={deleteTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
