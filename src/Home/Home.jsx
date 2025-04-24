// Home.js
import React from "react";
import Box from "@mui/material/Box";
import LandingPage from "../LandingPage/LandingPage";
import ProductsHome from "../Products/ProductsHome";
import ContactHome from "../Contacts/ContactsHome";
// import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

function Home() {
  //   const { i18n } = useTranslation();

  //   const changeLanguage = (lng) => {
  //     i18n.changeLanguage(lng);
  //   };

  //   const buttonStyles = (language) => ({
  //     minWidth: 40,
  //     textTransform: "uppercase",
  //     borderRadius: 2,
  //     borderWidth: 2,
  //     transition: "all 0.3s ease",
  //     backgroundColor:
  //       i18n.language === language ? "primary.main" : "transparent",
  //     color: i18n.language === language ? "common.white" : "primary.main",
  //     borderColor: "primary.main",
  //     fontWeight: "medium",
  //     "&:hover": {
  //       backgroundColor: "primary.dark",
  //       color: "common.white",
  //       borderColor: "primary.dark",
  //       boxShadow: 2,
  //       transform: "translateY(-2px)",
  //     },
  //   });

  return (
    <Box sx={{ position: "relative" }}>
      {/* <Box
        sx={{
          //   position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
          display: "flex",
          gap: 1,
          backdropFilter: "blur(4px)",
          borderRadius: 2,
          p: 0.5,
          bgcolor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          onClick={() => changeLanguage("en")}
          sx={buttonStyles("en")}
        >
          EN
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => changeLanguage("de")}
          sx={buttonStyles("de")}
        >
          DE
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => changeLanguage("bs")}
          sx={buttonStyles("bs")}
        >
          BS
        </Button>
      </Box> */}

      <LandingPage />
      <ProductsHome />
      <ContactHome />
    </Box>
  );
}

export default Home;
