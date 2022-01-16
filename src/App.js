import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Food",
      day: "July 2",
      reminder: true
    },
    {
      id: "2",
      name: "Grocery",
      day: "July 8",
      reminder: false
    },
    {
      id: "3",
      name: "Movie",
      day: "July 15",
      reminder: true
    }
  ]);

  const addTask = ({ taskName: name, day, reminder }) => {
    const id = Math.floor(Math.random() * 10000) + 1
    setTasks([...tasks, { id, name, day, reminder }]);
  }

  const onToggle = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, reminder: !task.reminder } : task
    ))
  }

  const onDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length
        ? <Tasks tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
        : 'No tasks found'}
    </>
  );
}

export default App
