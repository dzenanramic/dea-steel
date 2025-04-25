import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

/**
 * Services component displays detailed information about each service offered.
 */
function Services() {
  const { t } = useTranslation();

  // Array of services with image/icon, title, and description translation keys
  const services = [
    {
      id: 1,
      image: "/structural-steel2.jpg",
      title: t("structural_steel"),
      description: t("structural_steel_desc"),
    },
    {
      id: 2,
      image: "/metal-fabrication.jpg",
      title: t("metal_fabrication"),
      description: t("metal_fabrication_desc"),
    },
    {
      id: 3,
      image: "/welding-services.jpg",
      title: t("welding_services"),
      description: t("welding_services_desc"),
    },
    {
      id: 4,
      image: "/custom-solutions4.jpg",
      title: t("custom_solutions"),
      description: t("custom_solutions_desc"),
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        backgroundColor: "#1a1a1a", // Changed to match Fences component
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" }, // Matched Fences sizing
          mb: 6, // Increased margin to match
          fontFamily: "'Oswald', sans-serif",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#fff", // White text
        }}
      >
        {t("our_services")}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: "#B0C4DE", // Matching secondary color from Fences
          textAlign: "center",
          mb: 8, // Matching margin
          maxWidth: "800px",
          mx: "auto",
          fontFamily: "'Roboto Condensed', sans-serif",
        }}
      >
        {/* {t("services_description")} // You might want to add this translation
        key */}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {services.map((service) => (
          <Box
            key={service.id}
            sx={{
              width: { xs: "100%", md: "calc(50% - 16px)" },
              minWidth: "300px",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: { xs: 400, md: 400 },
                bgcolor: "#2a2a2a", // Matching card background
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)", // Matching hover effect
                },
              }}
            >
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                sx={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <CardContent
                sx={{
                  flex: 1,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6" // Changed to h6 to match Fences
                  sx={{
                    fontFamily: "'Roboto Condensed', sans-serif",
                    mb: 2,
                    color: "#fff", // White text
                    textAlign: "center",
                  }}
                >
                  {service.title}
                </Typography>
                {/* <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.6,
                    color: "#B0C4DE",
                    textAlign: "center",
                  }}
                >
                  {service.description}
                </Typography> */}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Services;
