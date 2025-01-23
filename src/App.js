import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyAccount from "./features/userProfile/MyAccount";
import OrderHistory from "./features/orderHistory/OrderHistory";
import UserProfile from "./features/userAccount/UserProfile";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/my-account/profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App;
