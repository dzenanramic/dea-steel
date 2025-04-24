// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
// import Gallery from "./Gallery/Gallery";
// import ContactHome from "./Contact/ContactHome";
// import Services from "./Services/Services";
import { Box } from "@mui/material";
import ContactHome from "./Contacts/ContactsHome";
// import Footer from "./Footer/Footer";

function App() {
  return (
    <Box sx={{ position: "relative", width: "99vw", height: "100vh" }}>
      {/* Background wrapper */}
      {/* <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('landing.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Send to back
        }}
      /> */}

      {/* Content container */}
      <Box sx={{ position: "relative" }}>
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/usluge" element={<Services />} /> */}
            {/* <Route path="/galerija" element={<Gallery />} /> */}
            <Route path="/kontakt" element={<ContactHome />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </Box>
    </Box>
  );
}

export default App;
