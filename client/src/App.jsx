import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import WishPage from "./pages/WishPage";
import CartListPage from "./pages/CartListPage";
import ProductByBrand from "./pages/ProductByBrandPage.jsx";
import ProductByCategory from "./pages/ProductByCategoryPage.jsx";
import ProductBySearchPage from "./pages/ProductBySearchPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify/:email" element={<VerifyPage />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/cart" element={<CartListPage />} />
          <Route path="/product-by-brand/:brand" element={<ProductByBrand />} />
          <Route path="/product-by-category/:category" element={<ProductByCategory />}/>
          <Route path="/product-by-search/:keyword" element={<ProductBySearchPage/>}/>
          <Route path="/user-profile" element={<UserProfilePage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
