import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserRoutes from "./features/userProfile/UserRoutes";
import OrderHistory from "./features/orderHistory/OrderHistory";
import SearchPage from "./features/searchPage/SearchPage";
import ProductDetail from "./features/productDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";
import CartPage from "./features/cartPage/CartPage";
import { FavoriteProvider } from "./context/FavoriteContext";
import FavoritePage from "./features/favoritePage/FavoritePage";
const App = () => {
  return (
    <CartProvider>
      <FavoriteProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/my-account/*" element={<UserRoutes />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/men/:categorySlug" element={<SearchPage />} />
            <Route path="/sp/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
          <Footer />
        </Router>
      </FavoriteProvider>

    </CartProvider>

  );
};

export default App;
