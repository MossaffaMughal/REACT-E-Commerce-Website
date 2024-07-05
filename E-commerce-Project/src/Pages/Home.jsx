import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homeContainer">
      <button
        className="btn-btn"
        onClick={() => {
          navigate("/products");
        }}
      >
        Products
      </button>
      <button
        className="btn-btn"
        onClick={() => {
          navigate("/categories");
        }}
      >
        Categories
      </button>
      <button
        className="btn-btn"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        className="btn-btn"
        onClick={() => {
          navigate("/signup");
        }}
      >
        SignUp
      </button>
    </div>
  );
};

export default Home;
