import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import splash from '../../assets/splash.gif'; // Make sure the path is correct

const SplashPage = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 3000); // Splash screen duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        bgcolor: "rgb(249,241,201)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: 2, // some padding to avoid edge clipping on small screens
        boxSizing: "border-box",
      }}
    >
      <Typography 
        variant="h2" 
        sx={{
          mb: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: {
            xs: "2rem",   // small screens
            sm: "3rem",   // tablets
            md: "4rem",   // desktops
          },
        }}
      >
        <img
          src={splash}
          alt="Splash Animation"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        />
      </Typography>
    </Box>
  );
};

export default SplashPage;
