import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/TaskListComponent';

function App() {
  if (localStorage.getItem("tasks") === null) {
    localStorage.setItem("tasks", JSON.stringify([]));
  } 
  return (
    <div className="App">
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
