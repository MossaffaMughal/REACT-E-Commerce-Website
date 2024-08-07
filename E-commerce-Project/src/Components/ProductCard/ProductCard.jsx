import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

const ProductCard = (props) => {
  const { item } = props; // Destructuring. props se jo item naam ka object ayega, woh yahan is item k variable mei store ho jaega
  // const { items } = useSelector((state) => {
  //   return state.cartStore;
  // });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cardContainer">
      <h3
        className="cardTitle hover:cursor-pointer"
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
      <button
        className="btn"
        onClick={() => {
          dispatch(addToCart(item));
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
