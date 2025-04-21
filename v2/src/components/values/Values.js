import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { GlobalStyles } from '@mui/system';
import Values from '../../assets/values.jpg'; // Assuming the image is in the assets folder
import Map from '../../components/map/Map'; // Assuming you have a Map component

const ValuesDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility to true when the image is in view
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes flipIn": {
            "0%": { transform: "rotateY(0deg)" },
            "50%": { transform: "rotateY(180deg)" },
            "100%": { transform: "rotateY(0deg)" },
          },
        }}
      />

      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '90vh', backgroundColor: 'white' }}>
        <Grid item xs={11} md={8} ref={sectionRef}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our <Typography variant='h4' component="span" sx={{ color: '#CD7F32', fontWeight: 'bold' }}>Values</Typography>
          </Typography>
          <Card elevation={4}>
            <CardContent>
              <img
                src={Values}
                alt="Our Values Diagram"
                style={{
                  width: '100%',
                  borderRadius: '25px',
                  marginTop: '16px',
                  maxWidth: '100%',
                  transition: 'transform 1s ease', // Smooth transition for flip effect
                  animation: isVisible ? 'flipIn 2s ease-in-out' : 'none', // Trigger flip in and return when in view
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ValuesDisplay;
