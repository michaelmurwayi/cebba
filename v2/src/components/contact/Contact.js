import React, { useEffect } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import beans from "../../assets/beans.png"; // Replace with actual image path
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        py: 5,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 3, md: 6 },
            py: { xs: 3, md: 5 },
            bgcolor: "white",
            borderRadius: "8px",
          }}
        >
          {/* Image Box */}
          <Box
            data-aos="fade-right"
            sx={{
              width: { xs: "70%", md: "25%" },
              minHeight: 200,
              bgcolor: "white",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={beans} alt="Beans" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Box>

          {/* "GET IN TOUCH" Text */}
          <Box sx={{ textAlign: "center", flexGrow: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
                fontStyle: "italic",
                fontWeight: 900,
                m: 0,
              }}
            >
              GET
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
                fontStyle: "italic",
                fontWeight: 900,
                m: 0,
              }}
            >
              IN
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
                fontStyle: "italic",
                fontWeight: 900,
                color: "#A0522D",
                m: 0,
              }}
            >
              TOUCH
            </Typography>
          </Box>

          {/* Contact Form Section */}
          <Box
            data-aos="fade-left"
            sx={{
              width: { xs: "80%", sm: "80%", md: "40%" },
              p: 4,
              borderRadius: "8px",
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
              margin: "20px",
              backgroundColor: "black",
            }}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              InputProps={{
                sx: {
                  backgroundColor: "white",
                  borderRadius: "4px",
                },
              }}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              InputProps={{
                sx: {
                  backgroundColor: "white",
                  borderRadius: "4px",
                },
              }}
              sx={{ mb: 3 }}
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              InputProps={{
                sx: {
                  backgroundColor: "white",
                  borderRadius: "4px",
                },
              }}
              sx={{
                width: "100%",
                mb: 3,
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#2c2c2c",
                color: "white",
                padding: "12px",
                borderRadius: "4px",
                ":hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
