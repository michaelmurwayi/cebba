import React from "react";
import { Box, Typography } from "@mui/material";
import "./Header.css"; // Import the CSS file

const Header = ({
  title = "Default Title",
  bgImage = "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  const words = title.split(" ");

  const renderWord = (word) => {
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
    return (
      <span className="word-wrapper">
        <span style={{ color: "rgb(205, 127, 50)" }}>{firstLetter}</span>
        {restOfWord}
      </span>
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", md: "100vh" },
        display: "flex",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "50%", md: "30%" },
        alignItems: "center",
        justifyContent: "center", // Center horizontally
        padding: { xs: "0 20px", md: "0 50px" },
        backgroundColor: "rgba(0, 0, 0, 1)",
        flexDirection: "row",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: '"jsMath-cmmi10", serif',
          fontSize: { xs: "1.9rem", md: "5.5rem" },
          fontWeight: "bold",
          color: "white",
          width: "100%", // Full width
          wordWrap: "break-word",
          textAlign: "center", // Aligns text left
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: adds a semi-transparent background
        }}
      >
        <span className="typewriter-text">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              {renderWord(word)}
              <br />
            </React.Fragment>
          ))}
        </span>
      </Typography>
    </Box>
  );
};

export default Header;
