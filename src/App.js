import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserRoutes from "./features/userProfile/UserRoutes";
import OrderHistory from "./features/orderHistory/OrderHistory";
import MenPage from "./features/menPage/MenPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/my-account/*" element={<UserRoutes />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/men" element={<MenPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
