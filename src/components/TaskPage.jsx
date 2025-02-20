import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/taskpage.css";

const TaskPage = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <h2>Tarefa não encontrada</h2>;
  }

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== id));
    navigate("/");
  };

  return (
    <div className="task-page">
      <h1>{task.title}</h1>
      <label>Status</label>
      <select 
        value={task.status} 
        onChange={(e) => {
          const updatedTasks = tasks.map((t) => 
            t.id === id ? { ...t, status: e.target.value } : t
          );
          setTasks(updatedTasks);
        }}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      
      <label>Descrição</label>
      <textarea value={task.description} readOnly />

      <button className="delete-btn" onClick={handleDelete}>
        Deletar atividade
      </button>
    </div>
  );
};

TaskPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskPage;
