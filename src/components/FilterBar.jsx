import { useState } from "react";

const FilterBar = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Filtrar tarefas..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;
