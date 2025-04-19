import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import initialState from "../../state/initialState";
import Intro from "../../components/intro/Intro";
import Statistics from "../../components/statistics/Statistics";
import Service from "../../components/services/Services";
import { Box, Typography, Container, Fade } from "@mui/material";
import slogan from "../../assets/slogan.png";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Map from "../../components/map/Map";

const Home = () => {
  const { HomePage, companyInfo } = initialState;
  const slide1 = {
    bodyText :initialState.HomePage.about.text,
    beans :initialState.HomePage.about.image1,
    mug  :initialState.HomePage.about.image2,
  }
  const slide2 = {
    bodyText :initialState.HomePage.about.text,
    beans :initialState.HomePage.about.image1,
    mug  :initialState.HomePage.about.image2,
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const introSlides = [
    <Intro bodyText={slide1.bodyText} image1={slide1.beans} image2={slide1.mug} key="slide1" />,
    <Intro bodyText={slide1.bodyText} image1={slide1.beans} image2={slide1.mug} key="slide2" />,

  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % introSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [introSlides.length]);

  return (
    <div>
      <Navbar />
      <Header
        title={companyInfo.name}
        text={HomePage.header.text}
        bgImage={HomePage.header.bgImage}
        number={companyInfo.contact}
        location={companyInfo.location}
        website={companyInfo.website}
      />

      {/* Slideshow for the Intro Components */}
      <Box sx={{ position: "relative", width: "100%", height: "90vh", overflow: "hidden" }}>
        {introSlides.map((slide, index) => (
          <Fade in={index === activeIndex} timeout={1000} key={index} unmountOnExit>
            <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
              {slide}
            </Box>
          </Fade>
        ))}
      </Box>

      <Statistics />
      <Service />

      <Box sx={{ width: "100%" }}>
        {/* Background Image Section */}
        <Box
          sx={{
            height: { xs: 250, sm: 350, md: 400 },
            backgroundImage: `url(${slogan})`,
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 1)",
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
              CEBBA promotes production and processing strategies that involve minimizing environmental impact throughout the coffee supply chain, from farm to cup. These include using organic fertilizers, adopting regenerative agricultural practises, agroforestry, minimal tillage, and implementing efficient water and waste management systems.
            </Typography>
          </Container>
        </Box>
      </Box>

      <Contact />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
