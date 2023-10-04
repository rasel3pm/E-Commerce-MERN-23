import MenuBar from "../components/Menu-Bar.jsx";
import Slider from "../components/Slider.jsx";
import Features from "../components/Features.jsx";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products.jsx";
import Brands from "../components/Brands.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <>
    <MenuBar/>
        <Slider/>
        <Features/>
        <Categories/>
        <Products/>
        <Brands/>
        <Footer/>
    </>
  );
};
export default HomePage;
