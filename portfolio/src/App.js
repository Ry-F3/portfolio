import React from "react";
import Styles from "./App.module.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/NavBar";

function App() {
  return (
    <div className={Styles.App}>
      <Navbar/>
      <container className={Styles.Main}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </container>
    </div>
  );
}

export default App;
