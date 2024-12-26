import React from "react";
import Styles from "./App.module.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/NavBar";



function App() {
  return (
    <div className={Styles.App}>
      <Navbar/>
      <div className={Styles.Main}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
