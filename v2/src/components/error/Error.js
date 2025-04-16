import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/error.jpeg"; // Replace with your actual image path

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "5rem", md: "8rem" },
            fontWeight: "bold",
            color: "#A0522D",
            mb: 2,
          }}
        >
          404
        </Typography>

        <Typography variant="h5" sx={{ mb: 3, color: "#333" }}>
          Oops! Page not found.
        </Typography>

        <Box
          component="img"
          src={errorImage}
          alt="Error Illustration"
          sx={{
            width: { xs: "70%", sm: "50%", md: "30%" },
            maxWidth: 400,
            mb: 4,
          }}
        />

        <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
          The page you’re looking for doesn’t exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2c2c2c",
            color: "white",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            ":hover": {
              backgroundColor: "#1565c0",
            },
          }}
          onClick={() => navigate("/")}
        >
          Go Back Home
        </Button>
      </Container>
    </Box>
  );
};

export default ErrorPage;
