import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TaskDetails = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === id);

  if (!task) return <h2>Tarefa não encontrada</h2>;

  const handleDelete = () => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    navigate("/");
  };

  return (
    <div className="task-details">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <select 
        value={task.status} 
        onChange={(e) => setTasks((prev) => prev.map(t => t.id === id ? {...t, status: e.target.value} : t))}
      >
        <option value="pendente">Pendente</option>
        <option value="realizando">Realizando</option>
        <option value="concluida">Concluída</option>
      </select>
      <button onClick={handleDelete}>Deletar atividade</button>
    </div>
  );
};

TaskDetails.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskDetails;
