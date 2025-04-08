import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import about from "../../assets/about.jpg";
import Section1 from "../../components/section1/Section";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const About = () => {
    // Use the theme hook for useMediaQuery
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // Styled components
    const BannerContainer = styled(Box)(({ theme }) => ({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
    }));
      
    const CoffeeImage = styled("img")(({ theme }) => ({
        height: 50,
        width: 50,
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
            <Section1 />
            <BannerContainer>
                <CoffeeImage src="/mnt/data/band.png" alt="Coffee beans left" />
                <Typography
                    variant={isMobile ? "body1" : "h6"}
                    color="white"
                    sx={{ textAlign: 'center', fontStyle: 'italic', marginX: 2 }}
                >
                    Great brands start with great coffee
                </Typography>
                <CoffeeImage src="/mnt/data/band.png" alt="Coffee beans right" />
            </BannerContainer>
        </div>
    );
};

export default About;
