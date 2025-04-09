import React, { useState, useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import { GlobalStyles } from "@mui/system";

// Keyframes for the bounce animation
const bounceKeyframes = {
  "0%": { transform: "translateY(0)" },
  "20%": { transform: "translateY(-10px)" },
  "40%": { transform: "translateY(10px)" },
  "60%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(0)" },
};

const Section = ({ title, highlight, visionText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility when the element comes into view
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes bounce": bounceKeyframes, // Apply bounce keyframes globally
        }}
      />

      <Box
        ref={sectionRef}
        sx={{
          flexGrow: 1,
          px: { xs: 2, md: 4 },
          py: 4,
          opacity: isVisible ? 1 : 0.5, // Apply opacity change when visible
          transition: "opacity 2s ease-in-out", // Smooth fade-in effect
          animation: isVisible ? "bounce 1s linear ease-in-out" : "none", // Trigger bounce animation when visible
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Left Box: Title */}
          <Grid item xs={12} md="auto">
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: 300 },
                height: { xs: "auto", md: 600 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 2,
                py: 2,
                color: "black",
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "4.5rem" },
                borderRadius: 2,
                wordWrap: "break-word",
                whiteSpace: "normal",
                flexDirection: "column",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 2s ease-in-out", // Smooth fade-in effect
                animation: isVisible ? "bounce 1s linear ease-in-out" : "none", // Bounce animation for title
              }}
            >
              <span>
                {title}{" "}
                <span style={{ color: "rgb(205,127,50)" }}>
                  {highlight}
                </span>
              </span>
            </Box>
          </Grid>

          {/* Right Box: Vision Text */}
          <Grid item xs={12} md="auto">
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: 700 },
                height: { xs: 300, sm: 400, md: 600 },
                backgroundColor: "#D9D9D9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
                textAlign: "center",
                py: 2,
                overflow: "auto",
                overflowWrap: "break-word",
                whiteSpace: "normal",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 2s ease-in-out", // Smooth fade-in effect
                animation: isVisible ? "bounce 1s linear ease-in-out" : "none", // Bounce animation for vision text
              }}
            >
              {visionText}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Section;
