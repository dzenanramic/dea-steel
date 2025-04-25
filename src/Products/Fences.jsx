import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function Fences() {
  const { t } = useTranslation();

  const fenceItems = [
    { id: 1, image: "/fence-category.jpeg", title: "Residential Fences" },
    { id: 2, image: "/fence2.jpg", title: "Commercial Fences" },
    { id: 3, image: "/fence3.jpg", title: "Security Fences" },
    { id: 4, image: "/fence4.jpg", title: "Custom Designs" },
  ];

  return (
    <Box sx={{ bgcolor: "#1a1a1a", minHeight: "100vh", py: 8 }}>
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
          {t("products.fences")}
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
          {t("products.fences_desc")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {fenceItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "calc(50% - 16px)",
                  md: "calc(25% - 24px)",
                },
                minWidth: 280,
                maxWidth: 380,
              }}
            >
              <Card
                sx={{
                  height: 400,
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
                    image={item.image}
                    alt={item.title}
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
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      fontFamily: "'Roboto Condensed', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Fences;
