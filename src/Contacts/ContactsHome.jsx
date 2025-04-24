import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { useTranslation } from "react-i18next";

function ContactHome() {
  const { t } = useTranslation();

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
          flexDirection: { xs: "column", md: "row" },
          width: "90%",
          padding: { xs: "20px", md: "40px" },
          borderRadius: "8px",
          backgroundColor: "#2a2a2a",
          gap: { xs: "30px", md: "60px" },
        }}
      >
        {/* Contact Info Section */}
        <Box
          sx={{
            flex: 1,
            color: "#fff",
            padding: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontFamily: "'Oswald', sans-serif",
              fontSize: { xs: "40px", md: "50px" },
              textTransform: "uppercase",
            }}
          >
            {t("contact_us")}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <ContactItem icon={<LocationOnIcon />} title={t("adress")}>
              123 Industrial Way, Steel Valley, SV 12345
            </ContactItem>

            <ContactItem icon={<PhoneIcon />} title={t("services")}>
              +1 (800) 555-0199
            </ContactItem>

            <ContactItem icon={<EmailIcon />} title={t("email")}>
              info@steelworks.com
            </ContactItem>

            <ContactItem icon={<EmailIcon size="24px" />} title="LinkedIn">
              <Typography
                component="a"
                href="#"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {t("linkedin_text", "Connect with us on LinkedIn")}
              </Typography>
            </ContactItem>

            <ContactItem icon={<ScheduleIcon />} title={t("office_hours")}>
              <Box>
                <Typography>
                  {t("mon_fri_hours", "Mon-Fri: 7:00 AM - 5:00 PM")}
                </Typography>
                <Typography>
                  {t("sat_hours", "Sat: 8:00 AM - 12:00 PM")}
                </Typography>
                <Typography>{t("sun_hours", "Sun: Closed")}</Typography>
              </Box>
            </ContactItem>
          </Box>
        </Box>

        {/* Map Section */}
        <Box
          sx={{
            flex: 1,
            height: { xs: "300px", md: "500px" },
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=steel+factory&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
}

const ContactItem = ({ icon, title, children }) => (
  <Box sx={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
    <Box sx={{ color: "#2a75b3", mt: "2px" }}>{icon}</Box>
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Roboto Condensed', sans-serif",
          mb: 1,
          fontSize: "1.1rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        component="div"
        variant="body1"
        sx={{
          color: "#ccc",
          lineHeight: "1.6",
        }}
      >
        {children}
      </Typography>
    </Box>
  </Box>
);

export default ContactHome;
