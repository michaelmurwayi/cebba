import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

import Values from '../../assets/values.jpg'; // Assuming the image is in the assets folder

const ValuesDisplay = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '90vh', backgroundColor: '#f5f5f5' }}>
      <Grid item xs={11} md={8}>
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
                maxWidth: '100%' 
              }} 
              sx={{
                width: { xs: '80%', sm: '80%' }, // 80% width on mobile (xs) and 100% on larger screens
                margin: '0 auto' // Center the image
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ValuesDisplay;
