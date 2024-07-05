import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  useEffect(() => {
    console.log("PARAMS: ", params);
  }, [params]);

  return (
    <>
      <h1>Product Details</h1>
    </>
  );
};

export default ProductDetails;
