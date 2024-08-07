import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homeContainer">
      <h1 className="heading">Welcome to My Store!</h1>
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
