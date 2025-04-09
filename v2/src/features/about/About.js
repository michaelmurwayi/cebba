import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import beans from "../../assets/beans.png";
import initialState from "../../state/initialState";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import about from "../../assets/about.jpg";
import Vision from "../../components/section1/Section";
import Mission from "../../components/section2/Section";
import Values from "../../components/values/Values";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const abv = initialState.companyInfo.abv;
  const visionText = initialState.companyInfo.vision;
  const missionText = initialState.companyInfo.mission;
  const contact = initialState.companyInfo.contact;
  const location = initialState.companyInfo.location;
  const website = initialState.companyInfo.website;

  // Styled components
  const BannerContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },
  }));

  const CoffeeImage = styled("img")(({ theme }) => ({
    height: 100,
    width: 'auto',
    maxWidth: 100,
    objectFit: 'contain',
    margin: theme.spacing(0.5),
  }));

  
  const InfoItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
    textAlign: 'center',
    color: 'white',
    // Media query for mobile view
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(5), // Adjust margin for smaller screens
      flexDirection: 'column', // Stack items vertically for smaller screens
      textAlign: 'left', // Center-align text on small screens
    },
  }));
  
  const IconText = styled(Typography)(({ theme }) => ({
    fontFamily: 'monospace',
    fontSize: '1.2rem',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    whiteSpace: 'pre-line',
    // Media query for mobile view
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem', // Adjust font size for smaller screens
      marginLeft: 0, // Remove margin on smaller screens
      textAlign: 'center', // Center-align text on small screens
    },
  }));
  
  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <Navbar />
      <Header
        title="ABOUT CEBBA"
        bgImage={about}
      />

      {/* Optional: Vision Section */}
      <Vision
        title={abv}
        highlight={"VISION"}
        visionText={visionText}
      />

      <BannerContainer>
        <CoffeeImage
          src={beans}
          alt="Coffee beans left"
        />
        <Typography
        color="white"
        sx={{
            textAlign: 'center',
            fontStyle: 'italic',
            mx: { xs: 0.5, sm: 2 },
            fontSize: { xs: '0.65rem', sm: '1rem', md: '2rem' },
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            letterSpacing: { xs: 'normal', sm: 'normal', md: '0.1em' }, // Increase word spacing for web view (md and above)
        }}
        >
        Great brands start with great coffee
        </Typography>

        <CoffeeImage
          src={beans}
          alt="Coffee beans right"
        />
      </BannerContainer>

      {/* Optional: Mission Section */}
      <Mission
        title={abv}
        highlight={"Mission"}
        visionText={missionText}
      />
      <BannerContainer>
      <InfoItem>
        <PhoneIcon sx={{ color: 'limegreen' }} />
        <IconText>{contact}</IconText>
      </InfoItem>

      <InfoItem>
        <PublicIcon sx={{ color: '#2f7a99' }} />
        <IconText>{website}</IconText>
      </InfoItem>

      <InfoItem>
        <LocationOnIcon sx={{ color: 'red' }} />
        <IconText>
            {location}
            {isMobile ? "\n" : " "}
        </IconText>
      </InfoItem>
    </BannerContainer>
    <Values />
    </div>
  );
};

export default About;
