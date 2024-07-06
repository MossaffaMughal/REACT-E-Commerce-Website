import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useEffect } from "react";

const ProductCard = (props) => {
  const { item } = props; // Destructuring. props se jo item naam ka object ayega, woh yahan is item k variable mei store ho jaega
  const navigate = useNavigate();

  // useEffect(() => {
  //   //  MAKE AN API CALL FOR PARMAS.PRODUCT_NUM
  // }, []);

  return (
    <div className="cardContainer">
      <h3
        className="hover:cursor-pointer"
        onClick={() => {
          navigate("/product-details/" + item.id);
        }}
      >
        {item.title}
      </h3>
      <p>{item.price}</p>
    </div>
  );
};

export default ProductCard;
