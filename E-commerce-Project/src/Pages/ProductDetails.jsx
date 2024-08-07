import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { ProductID } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${ProductID}`,
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [ProductID]);

  if (!product) {
    return <p className="m-8 text-center text-4xl">Product Not Found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4 w-96 overflow-hidden rounded-lg bg-white p-4 shadow-xl hover:cursor-pointer hover:bg-blue-50">
        <p className="mb-2 text-center text-lg font-bold">Product Details</p>
        <div className="mb-2">
          <span className="font-bold">Product ID:</span> {product.id}
        </div>
        <div className="mb-2">
          <span className="font-bold">Product Name:</span> {product.title}
        </div>
        <div className="mb-2">
          <span className="font-bold">Price:</span> ${product.price}
        </div>
        <div className="mb-2">
          <span className="font-bold">Description:</span> {product.description}
        </div>
        <div className="mb-2">
          <span className="font-bold">Category:</span> {product.category}
        </div>
      </div>

      <button className="m-4 w-96 rounded-lg bg-[#243049] p-4 text-white shadow-xl hover:cursor-pointer hover:bg-[#2f3b55]">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
