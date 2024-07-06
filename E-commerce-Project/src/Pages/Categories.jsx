import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const showCategories = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const products = response.data;
      const categoryList = [
        ...new Set(products.map((product) => product.category.toUpperCase())),
      ];
      setCategories(categoryList);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    showCategories();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-4 font-mono text-2xl">Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              navigate(`/products/${category.toLowerCase()}`);
            }}
            className="m-5 inline-block rounded-md p-4 shadow-md hover:cursor-pointer hover:border-blue-600 hover:bg-blue-400 hover:text-white"
          >
            {category}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
