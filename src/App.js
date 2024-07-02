import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DrawerAppBar from "./components/shared/navigation/DrawerAppBar";
import Home from "./components/Pages/Home/Home";
import FindaDoctor from "./components/Pages/FindaDoctor";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindaDoctor" element={<FindaDoctor />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
