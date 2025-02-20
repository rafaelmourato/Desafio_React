
import PropTypes from "prop-types";
import "../styles/task.css";

const Task = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

// Validação das props
Task.propTypes = {
  task: PropTypes.object.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Task;
