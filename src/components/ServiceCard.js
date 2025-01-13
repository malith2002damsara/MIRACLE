import React from 'react';
import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, link, darkMode }) => {
  return (
    <Card 
      sx={{
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        backgroundColor: darkMode ? '#666' : '#ffffff', // Gray background in dark mode, white in light mode
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Grid 
        container 
        direction="column"
        sx={{
          width: '100%',
          '@media (max-width: 600px)': { 
            flexDirection: 'column',
          },
        }}
      >
        {/* Image Section */}
        <Grid item>
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: '100%',
              height: { xs: '150px', sm: '180px' }, // Smaller height for phone screens
              objectFit: 'cover',
              transition: 'opacity 0.3s ease',
              '&:hover': { opacity: 0.9 },
            }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item>
          <CardContent 
            sx={{ 
              padding: { xs: '16px', sm: '20px' }, // Reduced padding for smaller screens
              textAlign: 'center', 
              color: darkMode ? '#FFF017' : '#000', // Yellow text in dark mode, black in light mode
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 1, 
                fontSize: { xs: '1.2rem', sm: '1.5rem' }, // Smaller font size on phones
                color: 'yellow', 
                position: 'relative',
                px: 1,
                textShadow: `
                  -1px -1px 2px black,  
                   1px -1px 2px black,
                  -1px  1px 2px black,
                   1px  1px 2px black
                `,
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 2, 
                fontSize: { xs: '0.9rem', sm: '1rem' }, // Smaller font size for body text on phones
              }}
            >
              {description}
            </Typography>
            <Button
              component={Link}
              to={link}
              variant="contained"
              sx={{
                backgroundColor: darkMode ? '#FFF017' : '#134df3',
                color: darkMode ? '#000' : '#fff', // Button text black in dark mode, white in light mode
                borderRadius: '8px',
                padding: { xs: '4px 12px', sm: '6px 16px' }, // Smaller padding for buttons on phones
                fontSize: { xs: '0.8rem', sm: '1rem' }, // Smaller font size on phones
                '&:hover': {
                  backgroundColor: darkMode ? '#333' : '#FFF017',
                  color: darkMode ? '#FFF017' : '#000', // Hover effect with contrasting text colors
                },
              }}
            >
              Learn More
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ServiceCard;
