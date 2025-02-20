import PropTypes from "prop-types";
import "../styles/filterbar.css";

const FilterBar = ({ filter, setFilter }) => {
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

// 🔹 Corrigindo PropTypes para refletir apenas as props usadas
FilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterBar;
