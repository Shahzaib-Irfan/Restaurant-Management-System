import { useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./utils/Navbar";
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
import MainPage from "./components/User/ItemSelection/MainPage";
import Dishes from "./components/User/ItemSelection/Dishes";
import SingleDish from "./components/Admin/Dishes/SingleDish";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SingleRestaurant from "./components/Admin/Restaurants/SingleRestaurant";
import "./App.css";
import SingleTable from "./components/Admin/Tables/SingleTable";
import SingleEmployee from "./components/Admin/Employee/SingleEmployee";
import UserOrders from "./components/User/Bookings/UserOrders";
import SingleUserOrder from "./components/User/Bookings/SingleUserOrder";
import AllOrders from "./components/Admin/Orders/AllOrders";
import AdminPrivateRoute from "./pages/AdminPrivateRoute";
import UserPrivateRoute from "./pages/UserPrivateRoute";
import MakeYourOwn from "./components/User/Dishes/MakeYourOwn";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/managedishes"
            element={
              <AdminPrivateRoute>
                <AdminDishes />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managedishes/adddish"
            element={
              <AdminPrivateRoute>
                <AddDish />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managedishes/viewdish/:id"
            element={
              <AdminPrivateRoute>
                <SingleDish />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managedishes/updatedish/:id"
            element={
              <AdminPrivateRoute>
                <UpdateDish />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/userorders"
            element={
              <AdminPrivateRoute>
                <AllOrders />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/userorders/vieworder/:id"
            element={
              <AdminPrivateRoute>
                <SingleUserOrder />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managerestaurants"
            element={
              <AdminPrivateRoute>
                <ManageRestaurants />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managerestaurants/viewrestaurant/:id"
            element={
              <AdminPrivateRoute>
                <SingleRestaurant />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managerestaurants/addrestaurant"
            element={
              <AdminPrivateRoute>
                <AddRestaurant />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managerestaurants/updaterestaurant/:id"
            element={
              <AdminPrivateRoute>
                <UpdateRestaurant />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managetables"
            element={
              <AdminPrivateRoute>
                <ManageTables />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managetables/viewtable/:id"
            element={
              <AdminPrivateRoute>
                <SingleTable />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managetables/addtable"
            element={
              <AdminPrivateRoute>
                <AddTable />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/managetables/updatetable/:id"
            element={
              <AdminPrivateRoute>
                <UpdateTable />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/manageemployees"
            element={
              <AdminPrivateRoute>
                <ManageEmployees />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/manageemployees/viewemployee/:id"
            element={
              <AdminPrivateRoute>
                <SingleEmployee />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/manageemployees/addemployee"
            element={
              <AdminPrivateRoute>
                <AddEmployee />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/manageemployees/updateemployee/:id"
            element={
              <AdminPrivateRoute>
                <UpdateEmployee />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/itemselection/restaurants"
            element={
              <UserPrivateRoute>
                <MainPage />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/itemselection/restaurants/:id"
            element={
              <UserPrivateRoute>
                <Dishes />
              </UserPrivateRoute>
            }
          />
          {/* <Route
            path="/itemselection/restaurants/:id/:dishID"
            element={<SingleDish />}
          /> */}
          <Route
            path="/orders"
            element={
              <UserPrivateRoute>
                <UserOrders />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/orders/vieworder/:id"
            element={
              <UserPrivateRoute>
                <SingleUserOrder />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <UserPrivateRoute>
                <CartPage />
              </UserPrivateRoute>
            }
          />

          <Route
            path="/makeyourown"
            element={
              <UserPrivateRoute>
                <MakeYourOwn />
              </UserPrivateRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
