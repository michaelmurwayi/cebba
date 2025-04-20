import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import initialState from "../../state/initialState";
import region from "../../assets/region.png";

const Layout = ({ bodyText, image1, image2 }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const regions = initialState?.regions;

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        flexWrap: { xs: "wrap", md: "nowrap" },
        marginBottom: { xs: 5, md: 0 },
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
          padding: { xs: "16px", md: "0px" },
          minHeight: { xs: "50vh", md: "100vh" },
          width: { xs: "100%", md: "50%" },
          flex: { md: "0 0 50%" },
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-offset="10"
          component="img"
          src={region}
          alt="Introduction Image"
          sx={{
            width: { xs: "80%", md: "60%" },
            height: { xs: "80%", md: "60%" },
            maxHeight: "700px",
            objectFit: "cover",
            borderRadius: { xs: 10, md: 20 },
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
          justifyContent: "center",
          padding: { xs: "16px", md: "20px" },
          minHeight: { xs: "auto", md: "100vh" },
          width: { xs: "100%", md: "50%" },
          flex: { md: "0 0 50%" },
        }}
      >
        <Box
          data-aos="fade-down"
          data-aos-offset="10"
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
              fontSize: { xs: "1.2rem", sm: "2.0rem", md: "2rem", lg: "3rem" },
              lineHeight: 1.2,
              fontWeight: 900,
              marginRight: { xs: 0, md: 2 },
              marginBottom: { xs: 1, md: 0 },
              whiteSpace: "nowrap",
            }}
          >
            SOURCED FROM <span style={{ color: "#b87d3f" }}>ALL REGIONS</span>
          </Typography>

          
        </Box>

        <Typography
          data-aos="fade-up"
          data-aos-offset="100"
          variant="body1"
          sx={{
            textAlign: "left",
            fontSize: { xs: "0.95rem", md: "1.25rem", lg: "1.35rem" },
            lineHeight: 1.6,
          }}
        >
          {bodyText}
        </Typography>

        {/* Coffee Regions Section */}
        

          {regions ? (
            <Box component="ul" sx={{ listStyle: "disc", paddingLeft: "2rem" }}>
              {Object.values(regions).map((region, index) => (
                <Box key={index} component="li" sx={{ mb: 2 }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    {region.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {region.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Typography variant="body1" align="center" color="text.secondary">
              Coffee regions data is not available.
            </Typography>
          )}
      </Grid>
    </Grid>
  );
};

export default Layout;
