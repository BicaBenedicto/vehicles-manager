import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Context from "./services";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import VehicleDetails from "./pages/VehicleDetails.jsx";
import Login from "./pages/Login.jsx";
import Manager from "./pages/Manager.jsx";

function App() {
  const [vehicles, setVehicles] = useState("");
  const [isTable, setIsTable] = useState(false);
  const [isLogged, changeIsLogged] = useState(false);
  const [types, setTypes] = useState("");
  const [categories, setCategories] = useState("");

  const store = useMemo(
    () => ({
      vehicles,
      setVehicles,
      isTable,
      setIsTable,
      isLogged,
      changeIsLogged,
      categories,
      setCategories,
      types,
      setTypes,
    }),
    []
  );

  return (
    <Context.Provider value={store}>
      <Routes>
        <Route
          path="/manager"
          element={
            <>
              <Header />
              <Manager />
            </>
          }
        />
        <Route
          path="/vehicles/:id"
          element={
            <>
              <Header />
              <VehicleDetails />
            </>
          }
        />
        <Route
          path="/vehicles"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
      </Routes>
    </Context.Provider>
  );
}

export default App;
