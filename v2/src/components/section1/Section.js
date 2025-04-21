import React, { useState, useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import { GlobalStyles } from "@mui/system";

// Bounce keyframes
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
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes bounce": bounceKeyframes,
        }}
      />

      <Box
        ref={sectionRef}
        sx={{
          flexGrow: 1,
          px: { xs: 2, md: 4 },
          py: 4,
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
                fontWeight: 900,
                borderRadius: 2,
                wordWrap: "break-word",
                whiteSpace: "normal",
                flexDirection: "column",
                animation: isVisible ? "bounce 1s ease-in-out" : "none",
              }}
            >
              <span>
                {title}{" "}
                <span style={{ color: "rgb(205,127,50)" }}>{highlight}</span>
              </span>
            </Box>
          </Grid>

          {/* Right Box: Vision Text */}
          <Grid item xs={12} md="auto">
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: 700 },
              height: { xs: 300, sm: 400, md: 400 },
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
              textAlign: "justify",
              py: 3,  // increased vertical padding
              px: 4,  // increased horizontal padding for side space
              lineHeight: 1.8,  // added line spacing
              overflow: "auto",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              animation: isVisible ? "bounce 1s ease-in-out" : "none",
              borderRadius: 2,
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
