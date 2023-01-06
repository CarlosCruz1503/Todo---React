import logo from './logo.svg';
import TaskListComponent from './components/containers/TaskListComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home';
function App() {
  if ( localStorage.getItem("tasks") === null){
    localStorage.setItem("tasks",JSON.stringify([]))
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
