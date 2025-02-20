import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";
import "./styles/app.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Carregar tarefas do Local Storage ao iniciar
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Salvar tarefas no Local Storage sempre que houver alteração
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterBar />
                <Board tasks={tasks} setTasks={setTasks} />
              </>
            }
          />
          <Route path="/new-task" element={<TaskForm setTasks={setTasks} />} />
          <Route path="/task/:id" element={<TaskDetails tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
