import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      {/* Hero Section - Modified to position title at bottom */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "50vh", md: "70vh" },
          display: "flex",
          alignItems: "flex-end", // Changed from center to flex-end
          justifyContent: "center",
          background: `
            linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
            url('/team.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pb: { xs: 8, md: 12 }, // Added bottom padding
          px: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontFamily: "'Oswald', sans-serif",
            textTransform: "uppercase",
            letterSpacing: { xs: 2, md: 4 },
            lineHeight: 1.2,
            maxWidth: "1200px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            mb: { xs: 4, md: 6 }, // Added margin bottom
          }}
        >
          {t("about_us")}
        </Typography>
      </Box>

      {/* Content Section (unchanged) */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Mission Card */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            backgroundColor: "#2a2a2a",
            color: "white",
            borderRadius: 2,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              fontFamily: "'Oswald', sans-serif",
              color: "#4682B4",
              lineHeight: 1.2,
            }}
          >
            {t("our_mission")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "#e0e0e0",
            }}
          >
            {t("mission_text")}
          </Typography>
        </Paper>

        {/* Features Card */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            backgroundColor: "#2a2a2a",
            color: "white",
            borderRadius: 2,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              fontFamily: "'Oswald', sans-serif",
              color: "#4682B4",
              lineHeight: 1.2,
            }}
          >
            {t("why_choose_us")}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {["expertise", "quality", "innovation", "reliability"].map(
              (item) => (
                <Box key={item} sx={{ position: "relative", pl: 3 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: "0.3em",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#B0C4DE",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#B0C4DE",
                      fontFamily: "'Roboto Condensed', sans-serif",
                    }}
                  >
                    {t(`${item}_title`)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      color: "#e0e0e0",
                      lineHeight: 1.7,
                    }}
                  >
                    {t(`${item}_text`)}
                  </Typography>
                </Box>
              )
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;
