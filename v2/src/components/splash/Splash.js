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
        height: "100vh",
        width: "100vw",
        bgcolor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* Typography with GIF Inside */}
      <Typography 
        variant="h2" 
        sx={{
          mb: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        🌊 MyApp
        <img
          src={splash}
          alt="Splash Animation"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "12px",
            marginTop: "20px",
          }}
        />
      </Typography>

      {loading && <CircularProgress color="inherit" />}
    </Box>
  );
};

export default SplashPage;
