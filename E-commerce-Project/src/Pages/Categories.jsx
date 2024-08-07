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
    <div className="flex h-screen flex-col items-center justify-center bg-[#425170]">
      <h1 className="p-4 font-mono text-3xl text-white">Categories</h1>
      <ul className="flex flex-col items-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              navigate(`/products/${category.toLowerCase()}`);
            }}
            className="m-5 inline-block w-[300px] cursor-pointer rounded-md bg-[#cae0f6] p-4 text-[18px] shadow-md transition-all duration-300 ease-in-out hover:border-[#2b6cb0] hover:bg-[#63b3ed] hover:text-[20px] hover:text-white"
          >
            {category}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
