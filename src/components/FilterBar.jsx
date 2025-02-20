import PropTypes from "prop-types";
import "../styles/filterbar.css";

const FilterBar = ({ filter, setFilter }) => {
  // Função para filtrar as tarefas
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Filtrar tarefas..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

// 🔹 Adicionando validação de PropTypes
FilterBar.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired, // Pode ser removido se não for usado
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterBar;
