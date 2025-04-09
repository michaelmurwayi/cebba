import React from "react";
import { Box, Grid } from "@mui/material";
import initialState from "../../state/initialState";

const Section = () => {
  const { companyInfo } = initialState;

  return (
    <Box sx={{ flexGrow: 1, px: { xs: 2, md: 4 }, py: 4 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {/* Left Box: Title */}
        <Grid item xs={12} md="auto">
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: 300 },
              height: { xs: "auto", md: 600 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
              py: 2,
              color: "black",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "4.5rem" },
              borderRadius: 2,
              wordWrap: "break-word",
              whiteSpace: "normal",
              flexDirection: "column",
            }}
          >
            <span>
              CEBBA{" "}
              <span style={{ color: "rgb(205,127,50)" /* your color choice */ }}>
                VISION
              </span>
            </span>
          </Box>
        </Grid>

        {/* Right Box: Vision Text */}
        <Grid item xs={12} md="auto">
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: 700 },
              height: { xs: 300, sm: 400, md: 600 },
              backgroundColor: "#D9D9D9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
              textAlign: "center",
              py: 2,
              overflow: "auto",
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            {companyInfo.vision}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
