import React from 'react';
import { Box, Typography } from '@mui/material';

const HomeVideo = ({ darkMode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column layout on phones, row layout on desktops
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        mb: { xs: 4, md: 0 },
      }}
    >
      {/* Video Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' }, // Full width on phones, half width on desktops
          display: 'flex',
          justifyContent: 'center',
          mb: { xs: 2, md: 0 }, // Add spacing below the video on smaller screens
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: 'auto', // Keep aspect ratio for responsive video height
            maxHeight: '550px', // Limit the height of the video
            borderRadius: '10px',
          }}
        >
          <source src="/wedding_lights.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          width: { xs: '90%', md: '50%' }, // Full width on phones, half width on desktops
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' }, // Center align on phones, left align on desktops
          textAlign: { xs: 'center', md: 'left' }, // Center text on phones, left align on desktops
          px: { xs: 2, md: 4 }, // Add padding for better spacing
          color: darkMode ? '#FFF017' : '#000', // Yellow in dark mode, black in light mode
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ mb: 2, fontSize: { xs: '1.2rem', md: '1.5rem' } }} // Smaller font on phones
        >
          Welcome to Miracle Lighting!
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }} // Adjust font size for responsiveness
        >
          Experience the magic of beautifully crafted lighting for your special occasions. 
          Our expert team is dedicated to making your event unforgettable.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeVideo;
