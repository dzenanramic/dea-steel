import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation();

  const categories = [
    {
      id: 1,
      title: t("products.fences"),
      image: "/fence-category.jpeg",
      description: t("products.fences_desc"),
      path: "/products/fences",
    },
    {
      id: 2,
      title: t("products.steel_constructions"),
      image: "/steel-construction.jpg",
      description: t("products.steel_constructions_desc"),
      path: "/products/steel-constructions",
    },
    {
      id: 3,
      title: t("products.metal_staircases"),
      image: "/staircases.jpg",
      description: t("products.metal_staircases_desc"),
      path: "/products/staircases",
    },
    {
      id: 4,
      title: t("products.gates_barriers"),
      image: "/gates.jpeg",
      description: t("products.gates_barriers_desc"),
      path: "/products/gates",
    },
    {
      id: 5,
      title: t("products.metal_furniture"),
      image: "/steel-furniture.jpg",
      description: t("products.metal_furniture_desc"),
      path: "/products/furniture",
    },
    {
      id: 6,
      title: t("products.metal_decorations"),
      image: "/metal-decorations.jpg",
      description: t("products.metal_decorations_desc"),
      path: "/products/decorations",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#1a1a1a",
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            textAlign: "center",
            mb: 6,
            fontFamily: "'Oswald', sans-serif",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            textTransform: "uppercase",
          }}
        >
          {t("our_products")}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#B0C4DE",
            textAlign: "center",
            mb: 8,
            maxWidth: "800px",
            mx: "auto",
            fontFamily: "'Roboto Condensed', sans-serif",
          }}
        >
          {/* {t("products_description")}  */}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {categories.map((category) => (
            <Box
              key={category.id}
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "calc(50% - 16px)",
                  md: "calc(33.333% - 16px)",
                },
                minWidth: 280,
                maxWidth: 380,
              }}
            >
              <Link to={category.path} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    height: 450,
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#2a2a2a",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Box sx={{ height: 240, overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={category.image}
                      alt={category.title}
                      sx={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: 210, // Fixed height for content
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontFamily: "'Roboto Condensed', sans-serif",
                        textAlign: "center",
                        mb: 2,
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#B0C4DE",
                        textAlign: "center",
                        lineHeight: 1.6,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {category.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Products;
