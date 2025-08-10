import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

function ServicesHome() {
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const { t } = useTranslation();
  const products = [
    { id: 1, image: "/structural-steel2.jpg", title: t("structural_steel") },
    { id: 2, image: "/metal-fabrication.jpg", title: t("metal_fabrication") },
    { id: 3, image: "/welding.png", title: t("welding_services") },
    { id: 4, image: "/custom-solutions4.jpg", title: t("custom_solutions") },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        py: 8,
        backgroundColor: "#1a1a1a",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          padding: { xs: "20px", md: "40px" },
          borderRadius: "8px",
          backgroundColor: "#2a2a2a",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontFamily: "'Oswald', sans-serif",
            fontSize: { xs: "40px", md: "50px" },
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          {t("our_products")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                width: { xs: "100%", md: "25%" },
                height: { xs: "300px", md: "400px" },
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease",
                transform:
                  hoveredCard === product.id ? "scale(1.05)" : "scale(1)",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter:
                    hoveredCard === product.id
                      ? "brightness(1.1)"
                      : "brightness(0.9)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  padding: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontSize: "1.1rem",
                  }}
                >
                  {product.title}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ServicesHome;
