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
import UpdateDish from "./components/Admin/Dishes/UpdateDish";
import ManageRestaurants from "./components/Admin/Restaurants/ManageRestaurants";
import AddRestaurant from "./components/Admin/Restaurants/AddRestaurant";
import UpdateRestaurant from "./components/Admin/Restaurants/UpdateRestaurant";
import ManageTables from "./components/Admin/Tables/ManageTables";
import AddTable from "./components/Admin/Tables/AddTable";
import UpdateTable from "./components/Admin/Tables/UpdateTable";
import ManageEmployees from "./components/Admin/Employee/ManageEmployees";
import AddEmployee from "./components/Admin/Employee/AddEmployee";
import UpdateEmployee from "./components/Admin/Employee/UpdateEmployee";

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
        <Route path="/managedishes/updatedish/:id" element={<UpdateDish />} />
        <Route path="/managerestaurants" element={<ManageRestaurants />} />
        <Route
          path="/managerestaurants/addrestaurant"
          element={<AddRestaurant />}
        />
        <Route
          path="/managerestaurants/updaterestaurant/:id"
          element={<UpdateRestaurant />}
        />
        <Route path="/managetables" element={<ManageTables />} />
        <Route path="/managetables/addtable" element={<AddTable />} />
        <Route path="/managetables/updatetable/:id" element={<UpdateTable />} />
        <Route path="/manageemployees" element={<ManageEmployees />} />
        <Route path="/manageemployees/addemployee" element={<AddEmployee />} />
        <Route
          path="/manageemployees/updateemployee/:id"
          element={<UpdateEmployee />}
        />
      </Routes>
    </Router>
  );
}

export default App;
