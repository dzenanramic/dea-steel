// Home.js
import React from "react";
import Box from "@mui/material/Box";
import LandingPage from "../LandingPage/LandingPage";
import ServicesHome from "../Services/ServicesHome";
import ContactHome from "../Contacts/ContactsHome";

function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <LandingPage />
      <ServicesHome />
      <ContactHome />
    </Box>
  );
}

export default Home;
