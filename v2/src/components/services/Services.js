import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import initialState from "../../state/initialState";

const services = initialState.services;

const ServicesSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#fff", marginTop: 5 }}>
      <Typography
        variant={isSmallScreen ? "h5" : isMediumScreen ? "h4" : "h3"}
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        OUR <span style={{ color: "#8B5A2B" }}>SERVICES</span>
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 10 }}>
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <Card
              sx={{
                width: { xs: "80%", sm: "90%", md: 300 },
                height: { xs: "auto", sm: 350, md: 400 },
                mx: "auto",
                borderRadius: 3,
                backgroundColor: "#000",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={service.image}
                alt={service.title}
                sx={{
                  borderRadius: "8px 8px 0 0",
                  objectFit: "cover",
                  marginBottom: 2,
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" align="center" sx={{ fontWeight: "bold", color: "#b87333" }}>
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
