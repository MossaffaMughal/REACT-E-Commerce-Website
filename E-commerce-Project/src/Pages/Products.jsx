import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";

const Products = () => {
  const [items, setItems] = useState([]);
  const params = useParams();

  const fetchCategory = async () => {
    try {
      let url = "https://fakestoreapi.com/products";
      if (params.category) {
        url = `${url}/category/${params.category}`;
      }
      const response_c = await axios.get(url);
      setItems(response_c.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    console.log("PARAMS: ", params);
    fetchCategory();
  }, [params]);

  const fetchProducts = async () => {
    // MAKE API CALL HERE
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setItems(response.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {items.map((itemEntry) => {
        return <ProductCard key={itemEntry.id} item={itemEntry} />;
      })}
    </>
  );
};

export default Products;
