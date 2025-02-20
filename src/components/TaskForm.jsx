import React, { useState } from "react";

const TaskForm = ({ setTasks, status }) => {
  const [title, setTitle] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), title, status, priority: "Normal" },
    ]);

    setTitle("");
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
