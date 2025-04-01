import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import intro from "../../assets/intro.jpg";

const Layout = ({
  headerText = "Header Text",
  bodyText = "Coffee Estates Bourgeoisie Brokers Agency Limited stands as a trailblazer in the coffee brokerage industry, driven by a mission to revolutionize coffee trading with an unwavering focus on farmer-friendly practices, sustainability, and unparalleled quality. By prioritizing the welfare of coffee producers, the agency ensures fair compensation and fosters long-term relationships that empower farmers and enrich local communities. Their sustainable operations are designed to minimize environmental impact while promoting eco-friendly farming techniques, thereby safeguarding the future of coffee cultivation. Committed to quality excellence, Coffee Estates Bourgeoisie Brokers Agency Limited meticulously curates and delivers premium coffee, satisfying even the most discerning palates and setting a new standard in the global coffee trade.",
  imageUrl = "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  return (
    <Grid 
      container 
      sx={{ 
        minHeight: "100vh", 
        width: "100%", 
        margin: 0,
        flexWrap: { xs: "wrap", md: "nowrap" }
      }}
    >
      {/* Left column with image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" }, // Align right on desktop
          alignItems: "center",
          padding: { xs: "16px", md: "32px" }, // Reduced padding
          minHeight: { xs: "50vh", md: "100vh" },
          width: { xs: "100%", md: "50%" },
          flex: { md: "0 0 50%" }
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt="Background Image"
          sx={{
            width: { xs: "70%", md: "70%" }, // Slightly larger on mobile
            height: { xs: "70%", md: "70%" },
            maxHeight: "700px",
            objectFit: "cover",
            borderRadius: { xs: 0, md: 2 },
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
          padding: { xs: "16px", md: "32px" }, // Reduced padding
          minHeight: { xs: "auto", md: "100vh" },
          width: { xs: "100%", md: "50%" },
          flex: { md: "0 0 50%" }
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: { xs: 2, md: 3 }, // Reduced margin
            flexWrap: { xs: "wrap", md: "nowrap" }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem", lg: "4rem" }, // Slightly smaller
              lineHeight: 1.2,
              fontWeight: 900,
              marginRight: { xs: 0, md: 2 },
              marginBottom: { xs: 1, md: 0 }, // Reduced margin
            }}
          >
            WE ARE <span style={{ color: "#b87d3f" }}>CEBBA</span>
          </Typography>
          
          <Box
            component="img"
            src={intro}
            alt="CEBBA Logo"
            sx={{
              width: { xs: "70px", md: "100px", lg: "130px" }, // Slightly smaller
              height: { xs: "70px", md: "100px", lg: "130px" },
            }}
          />
        </Box>

        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: "left", 
            fontSize: { xs: "0.95rem", md: "1.05rem", lg: "1.15rem" }, // Slightly smaller
            lineHeight: 1.6, // Tighter line height
          }}
        >
          {bodyText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Layout;