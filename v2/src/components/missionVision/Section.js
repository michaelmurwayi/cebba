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

const missionVision = initialState.missionVision;

const ServicesSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box sx={{ textAlign: "center", py: 5, backgroundColor: "#fff", marginTop: 5 }}>
      

      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 0 }}>
        {missionVision.map((mv, index) => (
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
                height: { xs: "auto", sm: 200, md: 250 },
                mx: "auto",
                borderRadius: 3,
                backgroundColor: "#000",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
        
            <Typography variant="h5" align="center" sx={{ fontWeight: "bold", color: "#b87333" }}>
                {mv.title}
            </Typography>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              <Typography variant="body1" align="justify-center" sx={{ color: "#fff" }}>
                {mv.text}
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
