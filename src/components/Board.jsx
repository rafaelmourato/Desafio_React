import PropTypes from "prop-types";
import Task from "./Task";
import "../styles/board.css";

const Board = ({ tasks, setTasks }) => {
  const statuses = ["To Do", "In Progress", "Done"];

  return (
    <div className="board">
      {statuses.map((status) => (
        <div key={status} className="column">
          <h2>{status}</h2>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <Task key={task.id} task={task} setTasks={setTasks} />
            ))}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Board;
