import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import initialState from "../../state/initialState";

const Layout = ({ bodyText, image1 }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Grid
      container
      sx={{
        width: "100%",
        margin: 0,
        flexWrap: { xs: "wrap", md: "nowrap" },
        mb: { xs: 8, md: 0 },
      }}
    >
      {/* Left Image Column */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "center",
          padding: { xs: 2, md: 0 },
          minHeight: { xs: "auto", md: "100vh" }, // no fixed height for mobile
          width: "100%",
        }}
      >
        <Box
          data-aos="fade-right"
          component="img"
          src={image1}
          alt="Introduction Image"
          sx={{
            width: { xs: "95%", sm: "85%", md: "60%" },
            height: "auto",
            maxHeight: "700px",
            objectFit: "cover",
            borderRadius: { xs: 2, md: 4 },
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
      </Grid>

      {/* Right Text Column */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", md: "center" },
          alignItems: { xs: "center", md: "flex-start" },
          padding: { xs: 3, sm: 4, md: 6 },
          minHeight: { xs: "auto", md: "100vh" },  // auto on mobile, fill on desktop
          width: "100%",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box
          data-aos="fade-down"
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: { xs: 2, md: 3 },
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem", lg: "5rem" },
              lineHeight: 1.2,
              fontWeight: 900,
              marginRight: { xs: 0, md: 2 },
              marginBottom: { xs: 1, md: 0 },
            }}
          >
            WE ARE <span style={{ color: "#b87d3f" }}>CEBBA</span>
          </Typography>
        </Box>

        <Typography
          data-aos="fade-up"
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem", lg: "1.35rem" },
            lineHeight: 1.8,
            maxWidth: "800px",
          }}
        >
          {bodyText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Layout;
