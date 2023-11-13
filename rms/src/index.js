import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DishesProvider } from "./contexts/DishContext";
import { RestaurantsProvider } from "./contexts/RestaurantContext";
import { TablesProvider } from "./contexts/TableContext";
import { EmployeesProvider } from "./contexts/EmployeeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EmployeesProvider>
    <RestaurantsProvider>
      <TablesProvider>
        <DishesProvider>
          <App />
        </DishesProvider>
      </TablesProvider>
    </RestaurantsProvider>
  </EmployeesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
