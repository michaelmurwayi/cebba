import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ title, image, descriptions }) => {
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
        paddingTop: { xs: 2, md: 2 },
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
          minHeight: { xs: "50vh", md: "auto" },
          width: { xs: "100%", md: "50%" },
          flex: { md: "0 0 50%" },
        }}
      >
        <Box
          data-aos="fade-right"
          component="img"
          src={image}
          alt="Service Visual"
          sx={{
            width: { xs: "70%", md: "60%" },
            height: { xs: "80%", md: "80%" },
            maxHeight: "700px",
            objectFit: "cover",
            borderRadius: { xs: 0, md: 10 },
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
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#b87d3f" }}>{title}</span>
          </Typography>
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
          {descriptions}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Layout;
