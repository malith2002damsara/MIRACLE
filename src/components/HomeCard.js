import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard'; // Import ServiceCard component

const services = [
  {
    title: 'Wedding Decor',
    description: 'Romantic lighting and decor for weddings.',
    image: '/wedding.jpg',
    link: '/wedding',
  },
  {
    title: 'Birthday Parties',
    description: 'Festive lighting setups for birthday celebrations.',
    image: '/birthday.jpg',
    link: '/birthday-parties',
  },
  {
    title: 'Christmas Parties',
    description: 'Bright and joyful lighting for Christmas parties.',
    image: '/christmas.jpg',
    link: '/christmas-parties',
  },
  {
    title: 'Kathina Festival',
    description: 'Elegant lighting for the Kathina festival.',
    image: '/kathina2.jpg',
    link: '/kathina-festival',
  },
];

const HomeCard = ({ darkMode }) => {
  return (
    <Box
      sx={{
        py: 10,
        px: 4,
        textAlign: 'center',
        backgroundColor: darkMode ? '#000' : '#FFFFFF', // Background color for light/dark mode
        borderRadius: '20px',
        boxShadow: 9,
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 6, color: '#134df3', fontWeight: 'bold' }}>
        Our Services
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '320px',
                height: '100%',
                borderRadius: '25px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                textAlign: 'center',
                backgroundColor: darkMode ? '#666' : '#ffffff', // Gray in dark mode, white in light mode
                padding: '20px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: darkMode ? '#555' : '#f0f0f0', // Darker gray on hover in dark mode, light gray in light mode
                },
                color: darkMode ? '#FFF017' : '#000', // Yellow text in dark mode, black text in light mode
              }}
            >
              <ServiceCard {...service} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCard;
