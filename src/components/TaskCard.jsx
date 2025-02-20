import PropTypes from "prop-types";
import "../styles/taskcard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Prioridade: {task.priority}</p>
    </div>
  );
};

// 🔹 Adicionando validação de PropTypes
TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
  setTask: PropTypes.func.isRequired,
};

export default TaskCard;

