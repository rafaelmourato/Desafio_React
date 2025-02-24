/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/board.css";

const Board = ({ tasks, filter }) => {
  const statuses = ["Planejado", "Em Andamento", "Concluido"];

  return (
    <div className="board">
      {statuses.map((status) => (
        <div key={status} className="column">
          <h2>{status}</h2>
          {tasks
            .filter((task) =>
              task.title.toLowerCase().includes(filter.toLowerCase()) // Aplica filtro
            )
            .filter((task) => task.status === status)
            .map((task) => (
              <Link to={`/task/${task.id}`} key={task.id} className="task-link">
                <div className="task">
                  <h3>{task.title}</h3>
                </div>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  filter: PropTypes.string.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Board;

