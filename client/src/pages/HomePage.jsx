import Slider from "../components/Slider.jsx";
import Features from "../components/Features.jsx";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products.jsx";
import Brands from "../components/Brands.jsx";
import Master from "../components/Master.jsx";

const HomePage = () => {
  return (
    <>
        <Master>
            <Slider/>
            <Features/>
            <Categories/>
            <Products/>
            <Brands/>
        </Master>
    </>
  );
};
export default HomePage;
