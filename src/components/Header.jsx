import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1>Kanban</h1>
      <button onClick={() => navigate("/new-task")}>Nova atividade</button>
    </div>
  );
};

export default Header;
