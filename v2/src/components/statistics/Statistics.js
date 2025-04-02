import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const stats = [
  { value: "100,000+", label: "Number of Bags Received", color: "#4CAF50" },
  { value: "1000+", label: "Network of Coffee Farmers", color: "#00BCD4" },
  { value: "10+", label: "Coffee Grade Variants", color: "#FFFFFF" },
];

const StatsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "white", py: 5, textAlign: "center" }}>
      <Grid container spacing={5} justifyContent="space-evenly" alignItems="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: stat.color }}>
              {stat.value}
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
