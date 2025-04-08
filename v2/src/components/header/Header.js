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
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "0 20px", md: "0 50px" },
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 1)",
      }}
    >
      {/* Optional overlay to darken image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      />
      <Typography
        variant="h2"
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: '"jsMath-cmmi10", serif',
          fontSize: { xs: "1.9rem", md: "5.5rem" },
          fontWeight: "bold",
          color: "white",
          width: "100%",
          wordWrap: "break-word",
          textAlign: "center",
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
