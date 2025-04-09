import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import initialState from "../../state/initialState";

const Layout = ({
  bodyText = initialState.HomePage.about.text,
  beans = initialState.HomePage.about.image1,
  mug = initialState.HomePage.about.image2,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* Left column with image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "center",
          padding: { xs: "16px", md: "0px" },
          minHeight: { xs: "50vh", md: "100vh" },
          width: { xs: "100%", md: "50%" },
          flex: { md: "0 0 50%" },
        }}
      >
        <Box
          data-aos="fade-right"
          component="img"
          src={beans}
          alt="Introduction Image"
          sx={{
            width: { xs: "80%", md: "60%" },
            height: { xs: "80%", md: "60%" },
            maxHeight: "700px",
            objectFit: "cover",
            borderRadius: { xs: 0, md: 20 },
          }}
        />
      </Grid>

      {/* Right column with text */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: "16px", md: "20px" },
          minHeight: { xs: "auto", md: "100vh" },
          width: { xs: "100%", md: "50%" },
          flex: { md: "0 0 50%" },
        }}
      >
        <Box
          data-aos="fade-down"
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: { xs: 2, md: 3 },
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem", lg: "5rem" },
              lineHeight: 1.2,
              fontWeight: 900,
              marginRight: { xs: 0, md: 2 },
              marginBottom: { xs: 1, md: 0 },
              whiteSpace: "nowrap", // Prevent wrap
            }}
          >
            WE ARE <span style={{ color: "#b87d3f" }}>CEBBA</span>
          </Typography>

          <Box
            component="img"
            src={mug}
            alt="CEBBA Logo"
            sx={{
              width: { xs: "70px", md: "100px", lg: "130px" },
              height: { xs: "70px", md: "100px", lg: "130px" },
            }}
          />
        </Box>

        <Typography
          data-aos="fade-up"
          variant="body1"
          sx={{
            textAlign: "left",
            fontSize: { xs: "0.95rem", md: "1.25rem", lg: "1.35rem" },
            lineHeight: 1.6,
          }}
        >
          {bodyText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Layout;
