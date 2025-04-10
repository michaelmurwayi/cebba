import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ title, image, descriptions }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ width: "100%", backgroundColor: "rgba(0, 0, 0)", color: "#fff" }}>
      <Grid
        container
        sx={{
          width: "100%",
          margin: 0,
          padding: 0,
          flexWrap: "nowrap", // Prevent wrapping on larger screens
          flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
          alignItems: "center", // Center content vertically
          justifyContent: "center", // Center content horizontally
          height: { xs: "auto", md: "80vh" }, // Ensure auto height on mobile and 80vh on desktop
          gap: { xs: 1, md: 2 }, // Reduce space between grid items
        }}
      >
        {/* Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Center text horizontally
            padding: { xs: "50px 1rem", md: 2 }, // Increased top padding for mobile view
            textAlign: "center", // Center text on mobile as well
            height: "100%", // Full height for mobile view
          }}
        >
          <Box data-aos="fade-down" sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "5rem" },
                fontWeight: 900,
                color: "#b87d3f",
                marginBottom: 2,
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </Typography>
          </Box>

          <Typography
            data-aos="fade-up"
            variant="body1"
            sx={{
              textAlign: "right",
              fontSize: { xs: "0.95rem", md: "1.25rem", lg: "1.35rem" },
              lineHeight: 1.6,
            }}
          >
            {descriptions}
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center", // Center image horizontally
            alignItems: "center",
            padding: { xs: "16px", md: "16px" }, // Adjusted padding for mobile view
            minHeight: { xs: "50vh", md: "auto" },
            width: { xs: "100%", md: "50%" },
            flex: { md: "0 0 50%" },
          }}
        >
          <Box
            data-aos="fade-left"
            component="img"
            src={image}
            alt="Service Visual"
            sx={{
              width: { xs: "80%", md: "60%" }, // Adjust width on mobile and desktop
              height: { xs: "80%", md: "80%" },
              maxHeight: "700px",
              objectFit: "cover",
              borderRadius: { xs: 0, md: 10 },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
