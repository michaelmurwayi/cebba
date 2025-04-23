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
import Intro2 from "../../components/intro/Intro2";
import MissionVision from "../../components/missionVision/Section";

const Home = () => {
  const { HomePage, companyInfo } = initialState;

  const slide1 = {
    bodyText: initialState.HomePage.about.text,
    beans: initialState.HomePage.about.image1,
    mug: initialState.HomePage.about.image2,
  };

  const slide2 = {
    bodyText: initialState.HomePage.about2.text,
    beans: initialState.HomePage.about2.image1,
    mug: initialState.HomePage.about2.image2,
  };

  const introSlides = [
    <Intro bodyText={slide1.bodyText} image1={slide1.beans} image2={slide1.mug} key="slide1" />,
    <Intro2 bodyText={slide2.bodyText} image1={slide2.beans} image2={slide2.mug} key="slide2" />,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % introSlides.length);
    }, 8000);
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
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          height: { xs: "190vh", sm: "auto", md: "100vh" },

        }}
      >
        {introSlides.map((slide, index) => (
          <Fade
            in={index === activeIndex}
            timeout={{ enter: 2000, exit: 2000 }}
            key={index}
            unmountOnExit
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
              }}
            >
              {slide}
            </Box>
          </Fade>
        ))}
      </Box>
      <Statistics />
      <MissionVision />
      <Service />

      {/* Background Image Section with Text */}
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            height: { xs: 250, sm: 350, md: 400 },
            backgroundImage: `url(${slogan})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            px: { xs: 2, sm: 4 }, // Padding for side space on mobile
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1rem", sm: "1.4rem", md: "1.8rem" },
              fontWeight: 300,
              textTransform: "none",
              letterSpacing: "0.3px",
              lineHeight: 1.2,
              maxWidth: { xs: "90vw", sm: "80vw", md: "700px" },
              margin: "0 auto",
            }}
          >
            Kenyan coffee, especially the{" "}
            <Box component="span" sx={{ color: "#b87d3f", fontWeight: "bold" }}>
              AA grade
            </Box>
            , is known for its large bean size, distinct flavour, and bright acidity.
            <br />
            It’s often described as having notes of blackcurrant, citrus, and wine.
            <br />
            The AA grade is Kenya’s flagship, but other high-quality primary grades —{" "}
            <Box component="span" sx={{ color: "#b87d3f", fontWeight: 500 }}>
              E, AB, PB, C, T, TT, MH, ML
            </Box>{" "}
            — are also available.
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
          <Container maxWidth="lg">
          <Typography
<<<<<<< HEAD
            variant="body1"
            sx={{
              textAlign: "left",
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem", lg: "1.6rem" },
              fontWeight: 400,
              lineHeight: { xs: 1.8, sm: 2 },
            }}
          >
            CEBBA promotes environmentally conscious strategies throughout the coffee supply chain—from farm to cup. This includes:
            <ul style={{ marginTop: 8, paddingLeft: "1.2em" }}>
              <li><strong>Use of organic fertilizers</strong></li>
              <li><strong>Regenerative agriculture</strong></li>
              <li><strong>Agroforestry</strong></li>
              <li><strong>Minimal tillage practices</strong></li>
              <li><strong>Efficient water and waste management systems</strong></li>
            </ul>
          </Typography>
=======
              variant="body1"
              sx={{
                textAlign: "left",
                fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.3rem", lg: "1.6rem" },
                fontWeight: 400,
                lineHeight: { xs: 1.8, sm: 2 },
              }}
            >
              CEBBA promotes environmentally conscious strategies throughout the coffee supply chain—from farm to cup. This includes:
              <ul style={{ marginTop: 8, paddingLeft: "1.2em" }}>
                <li><strong>Use of organic fertilizers</strong></li>
                <li><strong>Regenerative agriculture</strong></li>
                <li><strong>Agroforestry</strong></li>
                <li><strong>Minimal tillage practices</strong></li>
                <li><strong>Efficient water and waste management systems</strong></li>
              </ul>
            </Typography>
>>>>>>> main

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
