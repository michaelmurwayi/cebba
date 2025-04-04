import React from "react";
import { Box, TextField, Button, Typography, Grid, Container } from "@mui/material";
import beans from "../../assets/beans.png"; // Placeholder for the image

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
            <Box
            sx={{
              width: { xs: "70%", md: "25%" }, // Adjust width as needed
              minHeight: 200, // Minimum height for the image container
              bgcolor: "white", // Placeholder background color
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="textSecondary">
              <img src={beans} alt="Beans" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </Typography>
            {/* You would typically place an <img> tag here */}
          </Box>
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
            sx={{
              width: { xs: "80%", sm: "80%", md: "40%" },
              p: 4,
              borderRadius: "8px",
              boxShadow: 2,
              display: "flex",
              flexDirection: "column", // Stack items vertically
              margin: "20px", // Center the form
              backgroundColor: "black", // Light background for the form
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