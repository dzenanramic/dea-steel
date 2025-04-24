import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import { useTranslation } from "react-i18next";

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

function ProductsHome() {
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const { t } = useTranslation();
  const products = [
    { id: 1, image: "/structural-steel2.jpg", title: t("structural_steel") },
    { id: 2, image: "/metal-fabrication.jpg", title: t("metal_fabrication") },
    { id: 3, image: "/steel-coils2.jpg", title: t("welding_services") }, // <-- You might want to add this key
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
        backgroundColor: "#2a2a2a",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "40px", md: "50px" },
          mb: 6,
          fontFamily: "'Oswald', sans-serif",
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "3px",
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
          width: "90%",
          maxWidth: "1400px",
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
            sx={{
              width: { xs: "90%", md: "23%" },
              height: { xs: "300px", md: "400px" },
              borderRadius: "4px",
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
                variant="h5"
                sx={{
                  color: "#fff",
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontSize: "1.5rem",
                }}
              >
                {product.title}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ProductsHome;
