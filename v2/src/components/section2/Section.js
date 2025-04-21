import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import initialState from "../../state/initialState";
import { GlobalStyles } from "@mui/system";

// Keyframes for the bounce animation
const bounceKeyframes = {
  "0%": { transform: "translateY(0)" },
  "20%": { transform: "translateY(-10px)" },
  "40%": { transform: "translateY(10px)" },
  "60%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(0)" },
};

const Section = () => {
  const { companyInfo } = initialState;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility when the element comes into view
      },
      { threshold: 0.3 } // Trigger when 50% of the element is visible
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
          "@keyframes bounce": bounceKeyframes,
        }}
      />
      
      <Box ref={sectionRef} sx={{ flexGrow: 1, px: { xs: 2, md: 4 }, py: 4 }}>
        
        {/* Mobile Title at the Top */}
        {isMobile && (
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: "2rem",
              color: "black",
              animation: isVisible ? "bounce 1s ease-out" : "none", // Bounce animation when visible
            }}
          >
            CEBBA <span style={{ color: "rgb(205,127,50)" }}>MISSION</span>
          </Typography>
        )}

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          
          {/* Left Box: Vision Text */}
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
                  px: 3,  // increased horizontal padding for side space
                  lineHeight: 1.8,  // added line spacing
                  overflow: "auto",
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  animation: isVisible ? "bounce 1s ease-in-out" : "none",
                  borderRadius: 2,
                }}
              >
                {companyInfo.mission}
              </Box>
    
          </Grid>

          {/* Right Box: Title (hidden on mobile) */}
          {!isMobile && (
            <Grid item xs={12} md="auto">
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: 300 },
                  height: { xs: "auto", md: 600 },
                  fontWeight: 900,
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
                  animation: isVisible ? "bounce 1s ease-out" : "none", // Bounce animation when visible
                }}
              >
                <span>
                  CEBBA{" "}
                  <span style={{ color: "rgb(205,127,50)" }}>
                    MISSION
                  </span>
                </span>
              </Box>
            </Grid>
          )}

        </Grid>
      </Box>
    </>
  );
};

export default Section;
