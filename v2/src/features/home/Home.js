import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import initialState from "../../state/initialState";
import Into from "../../components/intro/Intro";
import Statistics from "../../components/statistics/Statistics";
import Service from "../../components/services/Services";
import { Box, Typography, Container } from "@mui/material";
import slogan from "../../assets/slogan.png";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";



const Home = () => {
  const { HomePage, companyInfo } = initialState;
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);  
  return (
    <div>
      <Navbar />
      <Header
      title = {companyInfo.name}
      bgImage={HomePage.header.bgImage}
      number = {companyInfo.contact}
      location = {companyInfo.location}
      website = {companyInfo.website}
    />
    <Into />
    <Statistics />  
    <Service />
    <Box sx={{ width: "100%" }}>
      {/* Background Image Section */}
      <Box
        sx={{
          height: { xs: 250, sm: 350, md: 400 },
          backgroundImage: `url(${slogan})`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 1)", // Fallback color
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {companyInfo.slogan}
        </Typography>
      </Box>

      {/* Description Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: { xs: 3, sm: 5 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem", lg: "1.6rem" },
              fontWeight: 500,
            }}
          >
            We are a pioneering coffee brokerage firm dedicated to transforming
            the coffee trading landscape through farmer-friendly practices,
            sustainable operations, and a commitment to quality excellence.
          </Typography>
        </Container>
      </Box>
    </Box>
    <Contact />
    <Footer />
    </div>
  );
}  

export default Home;