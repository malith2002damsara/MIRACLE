import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: { xs: 2, sm: 4 }, // Add padding for smaller screens
        overflow: 'hidden',
        backgroundImage: 'url(/wedding.jpg)', // Adjust the path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          color: '#FFD700',
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Adjust font size based on screen size
        }}
      >
        Light up your special day with Miracle Lighting
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: '#FFD700',
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }, // Adjust font size based on screen size
        }}
      >
        Stunning lighting designs for your dream wedding
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: '#FFD700',
          color: '#000',
          fontSize: { xs: '0.8rem', sm: '1rem' }, // Adjust button font size for smaller screens
          padding: { xs: '8px 16px', sm: '10px 20px' }, // Adjust button padding for smaller screens
        }}
        component={Link}
        to="/services"
      >
        Explore Our Services
      </Button>
    </Box>
  );
};

export default Hero;
