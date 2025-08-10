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

function SteelConstructions() {
  const { t } = useTranslation();

  const constructionItems = [
    { id: 1, image: "/steel-construction.jpg", title: "Industrial Structures" },
    { id: 2, image: "/steel-construction2.jpg", title: "Commercial Buildings" },
    { id: 3, image: "/steel-construction3.jpg", title: "Steel Frameworks" },
    { id: 4, image: "/steel-construction4.jpg", title: "Custom Projects" },
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
          {t("products.steel_constructions")}
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
          {t("products.steel_constructions_desc")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {constructionItems.map((item) => (
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
              sx: { backgroundColor: "black" },
            },
          }}
        >
          <DialogContent sx={{ p: 0, bgcolor: "black" }}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Steel Construction"
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

export default SteelConstructions;
