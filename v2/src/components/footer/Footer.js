import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";
import initialState from "../../state/initialState";

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(0.2),
  width: "100%",
}));

const CopyrightBox = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  padding: theme.spacing(3, 2),
  width: "100%",
  textAlign: "center",
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  marginBottom: theme.spacing(2),
}));

const Footer = () => {
  const { companyInfo } = initialState;

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        position: "relative",
        bottom: 0,
        left: 0,
        zIndex: 1000,
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <FooterWrapper>
        {/* Partners section can stay here if you want */}
      </FooterWrapper>

      {/* Combined Contact + Copyright Section */}
      <CopyrightBox>
        <ContactInfo>
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton color="success">
              <PhoneIcon />
            </IconButton>
            <Typography variant="body1">{companyInfo.contact}</Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton color="primary">
              <LanguageIcon />
            </IconButton>
            <Typography variant="body1">{companyInfo.website}</Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton color="error">
              <LocationOnIcon />
            </IconButton>
            <Typography variant="body1" textAlign="center">
              {companyInfo.location}
            </Typography>
          </Box>
        </ContactInfo>

        <Typography variant="body2">
          Copyright © 2025 CEBBA Systems. All rights reserved.
        </Typography>
      </CopyrightBox>
    </Box>
  );
};

export default Footer;
