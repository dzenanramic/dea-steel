import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Tooltip,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { title: t("home"), path: "/" },
    { title: t("about_us"), path: "/about" },
    { title: t("our_products"), path: "/products" },
    { title: t("services"), path: "/services" },
    { title: t("contact"), path: "/kontakt" },
  ];

  const toggleButtonStyles = (language, isMobile) => ({
    minWidth: isMobile ? 50 : 40,
    width: isMobile ? 50 : 40,
    height: isMobile ? 40 : 30,
    padding: 0,
    border: "none",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:after": {
      content: '""',
      position: "absolute",
      inset: 0,
      border:
        i18n.language === language
          ? "2px solid #fff"
          : "1px solid rgba(255,255,255,0.3)",
      borderRadius: 1,
      transition: "all 0.2s ease",
    },
    "&:hover": {
      transform: "scale(1.1)",
      "&:after": {
        borderColor: "#fff",
        boxShadow: "0 2px 8px rgba(255,255,255,0.3)",
      },
    },
    "&.Mui-selected": {
      backgroundColor: "transparent",
      "&:after": {
        borderWidth: 2,
        borderColor: "#fff",
      },
    },
  });

  const LanguageToggle = ({ isMobile }) => (
    <Box
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
          newLanguage && i18n.changeLanguage(newLanguage)
        }
        size="small"
        sx={{
          gap: isMobile ? 1 : 0.5,
          "& .MuiToggleButton-root": {
            margin: 0,
            borderRadius: 1,
          },
        }}
      >
        <Tooltip title="English" arrow>
          <ToggleButton value="en" sx={toggleButtonStyles("en", isMobile)}>
            <span style={{ fontSize: isMobile ? "1.8rem" : "1.4rem" }}>🇬🇧</span>
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Deutsch" arrow>
          <ToggleButton value="de" sx={toggleButtonStyles("de", isMobile)}>
            <span style={{ fontSize: isMobile ? "1.8rem" : "1.4rem" }}>🇩🇪</span>
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Bosanski" arrow>
          <ToggleButton value="bs" sx={toggleButtonStyles("bs", isMobile)}>
            <span style={{ fontSize: isMobile ? "1.8rem" : "1.4rem" }}>🇧🇦</span>
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(26, 26, 26, 0.95)",
          backdropFilter: "blur(8px)",
          height: 80,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "80px !important",
            height: 80,
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/dea-steel.png"
              alt="DEA STEEL"
              style={{
                width: "120px",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: location.pathname === item.path ? "100%" : "0%",
                        height: "2px",
                        backgroundColor: "#4682B4",
                        transition: "width 0.3s ease-in-out",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
              <LanguageToggle isMobile={false} />
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        disableScrollLock={true}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#1a1a1a",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <LanguageToggle isMobile={true} />
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.path}
                component={Link}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  backgroundColor:
                    location.pathname === item.path
                      ? "rgba(70, 130, 180, 0.1)"
                      : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(70, 130, 180, 0.2)",
                  },
                }}
              >
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Toolbar />
    </>
  );
}

export default Navbar;
