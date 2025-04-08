import React from "react";
import { Box, Grid } from "@mui/material";

const Section = () => {
  return (
    <Box sx={{ flexGrow: 1, px: { xs: 2, md: 4 }, py: 4 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {/* Red Box with Wrapped Text */}
        <Grid item xs={12} md="auto">
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: 300 },
              height: { xs: "auto", sm: 180, md: 600 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
              py: 2,
              color: "black",
              fontWeight: "",
              fontSize: { xs: "1.2rem", md: "4.5rem" },
              borderRadius: 2,
              wordWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            CEBBA VISION
          </Box>
        </Grid>

        {/* Blue Box */}
        <Grid item xs={12} md="auto">
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: 300 },
              height: { xs: 150, sm: 180, md: 600 },
              backgroundColor: "blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", md: "2.5rem" },
              borderRadius: 2,
              textAlign: "center",
              px: 2,
            }}
          >
            Blue Box
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
