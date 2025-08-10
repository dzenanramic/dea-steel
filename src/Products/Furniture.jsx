import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function Furniture() {
  const { t } = useTranslation();

  const furnitureItems = [
    // { id: 1, image: "/steel-furniture.jpg", title: "Tables" },
    { id: 2, image: "/steel-furniture2.jpg", title: "Chairs" },
    { id: 3, image: "/steel-furniture3.jpg", title: "Shelving" },
    { id: 4, image: "/steel-furniture4.jpg", title: "Custom Furniture" },
    { id: 5, image: "/steel-furniture5.jpg", title: "Office Furniture" },
    { id: 6, image: "/steel-furniture6.jpg", title: "Outdoor Furniture" },
    { id: 7, image: "/steel-furniture7.jpg", title: "Industrial Style" },
  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

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
          {t("products.metal_furniture")}
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
          {t("products.metal_furniture_desc")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {furnitureItems.map((item) => (
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
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
                onClick={() => handleOpen(item.image)}
              >
                <Box sx={{ height: 400, overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Box>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Image Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          disableScrollLock
          slotProps={{
            backdrop: {
              sx: { backgroundColor: "black" }, // fully opaque
            },
          }}
        >
          <DialogContent sx={{ p: 0, bgcolor: "black" }}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Furniture"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "90vh",
                  objectFit: "contain",
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

export default Furniture;
