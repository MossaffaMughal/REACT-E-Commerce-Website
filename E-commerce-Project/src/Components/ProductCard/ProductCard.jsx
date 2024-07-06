import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useEffect } from "react";

const ProductCard = (props) => {
  const { item } = props; // Destructuring. props se jo item naam ka object ayega, woh yahan is item k variable mei store ho jaega
  const navigate = useNavigate();

  return (
    <div className="cardContainer">
      <h3
        className="hover:cursor-pointer"
        onClick={() => {
          navigate("/product-details/" + item.id);
        }}
      >
        <span className="font-bold"> Product Name: </span>
        {item.title}
      </h3>
      <p>
        <span className="font-bold"> Price: </span>${item.price}
      </p>
    </div>
  );
};

export default ProductCard;
