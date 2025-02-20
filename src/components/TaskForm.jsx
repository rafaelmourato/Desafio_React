import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/taskform.css";

const TaskForm = ({ setTasks, status }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Normal");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      status,
      priority,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="Baixa">Baixa</option>
        <option value="Normal">Normal</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

// 🔹 Adicionando validação de PropTypes
TaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default TaskForm;
