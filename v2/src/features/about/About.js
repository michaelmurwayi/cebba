import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

import beans from "../../assets/beans.png";
import initialState from "../../state/initialState";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import about from "../../assets/about.jpg";
import Vision from "../../components/section1/Section";
import Mission from "../../components/section2/Section";
const About = () => {
    // Use the theme hook for useMediaQuery
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const abv = initialState.companyInfo.abv;
    const visionText = initialState.companyInfo.vision;
    // Styled components
    const BannerContainer = styled(Box)(({ theme }) => ({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        overflow: 'hidden', // Prevents overflow
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
    }));
      
    const CoffeeImage = styled("img")(({ theme }) => ({
        height: 80,
        width: 'auto', // Make width auto to maintain aspect ratio
        maxWidth: '100%', // Ensure images don't exceed their container width
        objectFit: 'contain',
        margin: theme.spacing(1),
    }));
      
    return (
        <div>
            <Navbar />
            <Header 
                title="ABOUT CEBBA"
                bgImage={about}
            />
            <Vision 
                title={abv}
                highlight={"Vision"}
                visionText={visionText}
            />
            <BannerContainer>
                <CoffeeImage src={beans} alt="Coffee beans left" />
                <Typography
                    variant={isMobile ? "body1" : "h4"}
                    color="white"
                    sx={{ textAlign: 'center', fontStyle: 'italic', marginX: 2 }}
                >
                    Great brands start with great coffee
                </Typography>
                <CoffeeImage src={beans} alt="Coffee beans right" />
            </BannerContainer>
            <Mission 
                title={abv}
                highlight={"Mission"}
                visionText={initialState.companyInfo.mission}
            />
        </div>
    );
};

export default About;
