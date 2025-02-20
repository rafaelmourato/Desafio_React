import PropTypes from "prop-types";
import Task from "./Task";

const Column = ({ tasks, setTasks, status }) => {
  return (
    <div className="column">
      <h2>{status}</h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <Task key={task.id} task={task} setTasks={setTasks} />
        ))}
    </div>
  );
};

 
Column.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default Column;

