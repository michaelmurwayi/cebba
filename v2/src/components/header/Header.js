import React from "react";
import { Box, Typography } from "@mui/material";
import "./Header.css"; // Import the CSS file

const Header = ({
  title = "Default Title",
  bgImage = "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) => {
  // Split the title into words
  const words = title.split(" ");

  // Function to render each word with the first letter colored
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
        height: { xs: "400px", md: "700px" }, // Responsive height
        display: "flex",
        backgroundImage: `url(${bgImage})`, // Background image
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "50%", md: "30%" }, // Responsive background size
        alignItems: "center", // Vertically center the content
        justifyContent: "flex-start", // Align title to the left
        textAlign: "left", // Ensure text is left-aligned
        padding: { xs: "0 20px", md: "0 50px" }, // Responsive padding
        backgroundColor: "rgba(0, 0, 0, 1)", // Dark overlay for better text visibility
        flexDirection: "row", // Keep the title and image in the same row
      }}
    >
      {/* Left-side Title Text Box */}
      <Typography
        variant="h2"
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: '"jsMath-cmmi10", serif',
          fontSize: { xs: "1.9rem", md: "5.5rem" }, // Responsive font size
          fontWeight: "bold",
          color: "white",
          maxWidth: { xs: "60%", md: "65%" }, // Limits width, making text wrap
          wordWrap: "break-word", // Ensures words don't overflow
          textAlign: "right", // Aligns text to the left
        }}
      >
        {/* Apply the typewriter effect to the title text */}
        <span className="typewriter-text">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              {renderWord(word)}
              <br /> {/* This forces each word to appear on a new line */}
            </React.Fragment>
          ))}
        </span>
      </Typography>
    </Box>
  );
};

export default Header;
