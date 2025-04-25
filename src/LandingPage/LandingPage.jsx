import React from "react";
import { Box } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        color: "#ffffff",
        textAlign: "center",
        px: { xs: 1.5, md: 4 },
        py: { xs: 4, md: 8 },
        background: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.95)),
          url('/konstrukcija.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Language Toggle */}
      {/* <Box
        position="absolute"
        top={{ xs: 12, md: 20 }}
        right={{ xs: 8, md: 100 }}
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
          borderRadius: 1,
          p: 0.5,
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        <ToggleButtonGroup
          value={i18n.language}
          exclusive
          onChange={(event, newLanguage) =>
            newLanguage && changeLanguage(newLanguage)
          }
          size="small"
          sx={{
            gap: 0.5,
            "& .MuiToggleButton-root": {
              margin: 0,
              borderRadius: 1,
            },
          }}
        >
          <Tooltip title="English" arrow>
            <ToggleButton value="en" sx={toggleButtonStyles("en")}>
              <span style={{ fontSize: "1.4rem" }}>🇬🇧</span>
            </ToggleButton>
          </Tooltip>
          <Tooltip title="Deutsch" arrow>
            <ToggleButton value="de" sx={toggleButtonStyles("de")}>
              <span style={{ fontSize: "1.4rem" }}>🇩🇪</span>
            </ToggleButton>
          </Tooltip>
          <Tooltip title="Bosanski" arrow>
            <ToggleButton value="bs" sx={toggleButtonStyles("bs")}>
              <span style={{ fontSize: "1.4rem" }}>🇧🇦</span>
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </Box> */}

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: "1200px",
          px: { xs: 1, md: 4 },
          mt: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: { xs: "2rem", sm: "3.5rem", md: "5.5rem" },
            mb: { xs: 1, md: 2 },
            fontWeight: "bold",
            letterSpacing: { xs: "1px", md: "3px" },
            lineHeight: { xs: 1.2, md: 1.1 },
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          {t("welcome")}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2.25rem" },
            mb: { xs: 2, md: 4 },
            maxWidth: "800px",
            mx: "auto",
            lineHeight: { xs: 1.4, md: 1.5 },
            px: { xs: 1, md: 0 },
          }}
        >
          {t("description")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 3 },
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            component={Link}
            to="/about"
            sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 1, md: 1.5 },
              textTransform: "uppercase",
              fontFamily: "'Oswald', sans-serif",
              fontSize: { xs: "0.875rem", md: "1.25rem" },
              fontWeight: 600,
              minWidth: { xs: "160px", md: "220px" },
              color: "#fff",
              background: "linear-gradient(45deg, #4682B4, #2F4F4F)",
              border: "2px solid #B0C4DE",
              borderRadius: 1,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                background: "linear-gradient(45deg, #2F4F4F, #4682B4)",
                borderColor: "#fff",
                transform: "translateY(-3px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
              },
              "&:focus": {
                outline: "2px solid #fff",
                outlineOffset: 4,
              },
            }}
          >
            {t("about_us")}
          </Button>

          <Button
            component={Link}
            to="/products"
            sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 1, md: 1.5 },
              textTransform: "uppercase",
              fontFamily: "'Oswald', sans-serif",
              fontSize: { xs: "0.875rem", md: "1.25rem" },
              fontWeight: 600,
              minWidth: { xs: "160px", md: "220px" },
              color: "#fff",
              background: "linear-gradient(45deg, #2F4F4F, #4682B4)",
              border: "2px solid #B0C4DE",
              borderRadius: 1,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                background: "linear-gradient(45deg, #4682B4, #2F4F4F)",
                borderColor: "#fff",
                transform: "translateY(-3px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
              },
              "&:focus": {
                outline: "2px solid #fff",
                outlineOffset: 4,
              },
            }}
          >
            {t("our_products")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
