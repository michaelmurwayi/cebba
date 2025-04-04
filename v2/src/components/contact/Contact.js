import React from "react";
import { Box, TextField, Button, Typography, Grid, Container } from "@mui/material";

const ContactForm = () => {
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
          <Box sx={{ textAlign: "center", flexGrow: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontStyle: "italic",
                fontWeight: 500,
                m: 0,
              }}
            >
              GET
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontStyle: "italic",
                fontWeight: 500,
                m: 0,
              }}
            >
              IN
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontStyle: "italic",
                fontWeight: 500,
                color: "#A0522D",
                m: 0,
              }}
            >
              TOUCH
            </Typography>
          </Box>

          {/* Contact Form Section */}
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "50%" },
              p: 4,
              borderRadius: "8px",
              boxShadow: 2,
              display: "flex",
              flexDirection: "column", // Stack items vertically
              margin: "20px", // Center the form
            }}
          >
            {/* Remove Grid to arrange items vertically */}
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
              sx={{ mb: 3 }} // Add margin bottom for spacing
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
              sx={{ mb: 3 }} // Add margin bottom for spacing
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
                width: "100%", // Ensures full width
                mb: 3, // Add margin bottom for spacing
              }}
            />

            {/* Submit Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#1976d2",
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