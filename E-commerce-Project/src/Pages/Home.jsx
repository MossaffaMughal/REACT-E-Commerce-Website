import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          navigate("/products");
        }}
      >
        Products
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate("/categories");
        }}
      >
        Categories
      </button>
    </>
  );
};

export default Home;
