import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const TaskDetails = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === id);

  const [description, setDescription] = useState(task ? task.description : "");

  if (!task) return <h2>Tarefa não encontrada</h2>;

  const handleDelete = () => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    navigate("/");
  };

  const handleSave = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, description } : t
      )
    );
    navigate("/"); // Voltar para o Kanban
  };

  return (
    <div className="task-details">
      <h1>{task.title}</h1>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <select 
        value={task.status} 
        onChange={(e) => {
          const newStatus = e.target.value;
          setTasks((prevTasks) => 
            prevTasks.map((t) => t.id === id ? { ...t, status: newStatus } : t)
          );
        }}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={handleDelete}>Deletar</button>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  );
};

TaskDetails.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskDetails;
