import Navbar from "../Components/Navbar/index";
import Footer from "../Components/Footer/index";

const LayoutOne = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default LayoutOne;
