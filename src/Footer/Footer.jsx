import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        textAlign: "center",
        padding: "2rem 0",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          padding: { xs: "20px", md: "40px" },
          backgroundColor: "#2a2a2a",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontFamily: "'Roboto Condensed', sans-serif",
            color: "#ccc",
          }}
        >
          © {new Date().getFullYear()} DEA Steel.{" "}
          {t("footer.all_rights_reserved")}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#ccc",
            fontSize: "0.875rem",
            fontFamily: "'Roboto Condensed', sans-serif",
            "& a": {
              color: "#2a75b3",
              textDecoration: "none",
              transition: "color 0.3s ease",
              "&:hover": {
                textDecoration: "underline",
                color: "#3891db",
              },
            },
          }}
        >
          {t("footer.website_by")}{" "}
          <Link
            href="https://lightcit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Light & ConsulITing
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
