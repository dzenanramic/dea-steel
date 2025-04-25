// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
// import Gallery from "./Gallery/Gallery";
// import ContactHome from "./Contact/ContactHome";
// import Services from "./Services/Services";
import Products from "./Products/Products";
import { Box } from "@mui/material";
import ContactHome from "./Contacts/ContactsHome";
import Fences from "./Products/Fences";
import Gates from "./Products/Gates";
import Decorations from "./Products/Decorations";
import Furniture from "./Products/Furniture";
import Staircase from "./Products/Staircase";
import SteelConstructions from "./Products/SteelConstructions";
import Navbar from "./components/Navbar/Navbar";
import Services from "./Services/Services";
import ScrollToTop from "./components/Navbar/ScrollToTop";
import Footer from "./Footer/Footer";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Box sx={{ position: "relative", width: "99vw", height: "100vh" }}>
      <Box sx={{ position: "relative" }}>
        <Router>
          <ScrollToTop /> {/* Add this line right after Router */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/fences" element={<Fences />} />
            <Route path="/products/gates" element={<Gates />} />
            <Route path="/products/decorations" element={<Decorations />} />
            <Route path="/products/furniture" element={<Furniture />} />
            <Route path="/products/staircases" element={<Staircase />} />
            <Route path="/services" element={<Services />} />

            <Route
              path="/products/steel-constructions"
              element={<SteelConstructions />}
            />

            {/* <Route path="/usluge" element={<Services />} /> */}
            {/* <Route path="/galerija" element={<Gallery />} /> */}
            <Route path="/kontakt" element={<ContactHome />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </Box>
  );
}

export default App;
