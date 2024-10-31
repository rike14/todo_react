import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What are you going to do?</h2>
          <TaskForm btnText="Create Task"/>
        </div>
        <div>
          <h2>Your Tasks</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
