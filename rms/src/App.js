import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminDishes from "./components/Admin/Dishes/ManageDishes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDish from "./components/Admin/Dishes/AddDish";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/managedishes" element={<AdminDishes />} />
        <Route path="/managedishes/adddish" element={<AddDish />} />
      </Routes>
    </Router>
  );
}

export default App;
