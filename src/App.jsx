import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import "./styles/app.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <Header />
      <FilterBar tasks={tasks} setTasks={setTasks} />
      <Board tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
