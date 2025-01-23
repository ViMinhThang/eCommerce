import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  )
}


export default App;
