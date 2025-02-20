import React from "react";

const TaskCard = ({ task, setTasks }) => {
  const removeTask = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Prioridade: {task.priority}</p>
      <button onClick={removeTask}>Excluir</button>
    </div>
  );
};

export default TaskCard;
