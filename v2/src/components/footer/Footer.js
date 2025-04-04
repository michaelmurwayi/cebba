import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from '@mui/material/styles';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(2),
  width: '100%', // Ensure full width
}));

const CopyrightBox = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  padding: theme.spacing(2),
  /* marginTop: theme.spacing(2), */ // Removed marginTop to reduce space
  width: '100%', // Cover full width
  textAlign: 'center',
}));

const Footer = () => {
  return (
    <Box
      component="footer" // Semantic HTML5 footer tag
      sx={{
        width: '100%',
        position: 'relative', // Stick to the bottom
        bottom: 0,
        left: 0,
        zIndex: 1000, // Ensure it's above other content if needed
        overflow: 'hidden', // Prevent overflow
    }}
    >
    <FooterWrapper>
      <Grid container spacing={3} justifyContent="center" textAlign="center">
        {/* Phone Section */}
        <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
          <IconButton color="success">
            <PhoneIcon />
          </IconButton>
          <Typography variant="body1">+254-722919029</Typography>
        </Grid>

        {/* Website Section */}
        <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
          <IconButton color="primary">
            <LanguageIcon />
          </IconButton>
          <Typography variant="body1">www.cebba.ke</Typography>
        </Grid>

        {/* Location Section */}
        <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
          <IconButton color="error">
            <LocationOnIcon />
          </IconButton>
          <Typography variant="body1" textAlign="center">
            Coffee Plaza, Exchange Lane - Off Haile Selassie Avenue
          </Typography>
        </Grid>
      </Grid>
    </FooterWrapper>
      {/* Copyright Section */}
      <CopyrightBox>
        <Typography variant="body2">
          Copyright © 2025 CEBBA Systems. All rights reserved.
        </Typography>
      </CopyrightBox>
    </Box>
  );
};

export default Footer;