import React, { useEffect } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { Phone, Language, LocationOn } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({
  title = "Default Title",
  text,
  bgImage = "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  number,
  website,
  location
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const words = title.split(" ");

  const renderWord = (word, index) => {
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
    return (
      <span key={index} className="word-wrapper" style={{ marginRight: "12px" }}>
        <span style={{ color: "#b87d3f", fontWeight: "bold" }}>{firstLetter}</span>
        {restOfWord}
      </span>
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", sm: "100vh", md: "85vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: { xs: 2, md: 4 }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          zIndex: 0
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h2"
          data-aos="fade-down"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.8rem", md: "4rem" },
            fontWeight: 900,
            color: "#fff",
            lineHeight: { xs: 1.1, sm: 1.1, md: 1.4 },
            mb: { xs: 2, md: 2 },
            wordBreak: "break-word"
          }}
        >
          {words.map((word, index) => (
            <React.Fragment key={index}>
              {renderWord(word, index)}
              {(index + 1) % Math.ceil(words.length / 2) === 0 && <br />}
            </React.Fragment>
          ))}
        </Typography>

        <Box
          data-aos="fade-up"
          data-aos-delay="500"
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2, sm: 3 },
            borderRadius: 2,
            display: "inline-block",
            fontSize: { xs: "0.7rem", sm: "1rem", md: "1.1rem" },
            lineHeight: { xs: "2", md: "1.6" },
            maxWidth: { xs: "100%", sm: "100%", md: "70%" },
            textAlign: "left"
          }}
        >
          {text}
        </Box>
      </Container>

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          mt: { xs: 2, md: 3 },
          px: { xs: 2, sm: 3, md: 4 },
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <Box
          data-aos="fade-up"
          data-aos-delay="700"
          sx={{
            bgcolor: "rgba(0, 0, 0, 0)",
            color: "#fff",
            borderRadius: 2,
            py: { xs: 2, sm: 3 },
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            overflow: "hidden",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ flexWrap: "wrap", width: "100%" }}
          >
            <Box display="flex" alignItems="center" justifyContent="center" sx={{ maxWidth: "100%" }}>
              <Phone sx={{ color:"green", mr: 1 }} />
              <Typography sx={{ fontSize: { xs: "0.65rem", sm: "1rem" }, lineHeight: { xs: 1, sm: 1.4 }, wordBreak: "break-word" }}>
                {number}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{ maxWidth: "100%" }}>
              <Language sx={{ color:"blue", mr: 1 }} />
              <Typography sx={{ fontSize: { xs: "0.65rem", sm: "1rem" }, lineHeight: { xs: 1, sm: 1.4 }, wordBreak: "break-word" }}>
                {website}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{ maxWidth: "100%" }}>
              <LocationOn sx={{ color:"red", mr: 1 }} />
              <Typography sx={{ fontSize: { xs: "0.65rem", sm: "1rem" }, lineHeight: { xs: 1, sm: 1.4 }, wordBreak: "break-word" }}>
                {location}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
