import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ServiceCard from '../components/ServiceCard'; // Assuming ServiceCard is in the same directory

const services = [
  { title: 'Indoor Lighting', description: 'Enhance indoor spaces with beautiful lighting', image: '/images/indoor-lighting-1.jpg', link: '/indoor-lighting' },
  { title: 'Outdoor Lighting', description: 'Brighten outdoor areas for any occasion', image: '/images/outdoor-lighting-1.jpg', link: '/outdoor-lighting' },
  { title: 'Backdrop Lighting', description: 'Highlight backdrops with stunning lighting', image: '/images/backdrop-lighting-1.jpg', link: '/backdrop-lighting' },
  { title: 'Chandeliers', description: 'Enhance indoor spaces with beautiful lighting', image: '/images/chandelier-1.jpg', link: '/Chandeliers' },
  { title: 'Chinese Lanterns', description: 'Brighten outdoor areas for any occasion', image: '/images/chinese-lanterns-1.jpg', link: '/Chinese-Lanterns' },
  { title: 'Christmas Tree Lights', description: 'Enhance indoor spaces with beautiful lighting', image: '/images/christmas-tree-lights-1.jpg', link: '/Christmas-Tree-Lights' },
  { title: 'Fairy Lights', description: 'Brighten outdoor areas for any occasion', image: '/images/fairy-lights-1.jpg', link: '/Fairy-Lights' },
  { title: 'Festoon Lights', description: 'Enhance indoor spaces with beautiful lighting', image: '/images/festoon-lights-1.jpg', link: '/Festoon-Lights' },
  { title: 'LightUp Letters', description: 'Brighten outdoor areas for any occasion', image: '/images/light-up-letters-1.jpg', link: '/Light-Up-Letters' },
  { title: 'LightUp Reindeer Or Snowman', description: 'Enhance indoor spaces with beautiful lighting', image: '/images/reindeer-snowman-1.jpg', link: '/Light-up-Reindeer-or-Snowman' },
  { title: 'Pathway Lights', description: 'Brighten outdoor areas for any occasion', image: '/images/pathway-lights-1.jpg', link: '/Pathway-Lights' },
  { title: 'String Lights', description: 'Enhance indoor spaces with beautiful lighting', image: '/images/string-lights-1.jpg', link: '/String-Lights' },
  { title: 'Up Lighting', description: 'Brighten outdoor areas for any occasion', image: '/images/up-lighting-1.jpg', link: '/Up-lighting' },
  
];

const Services = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300); // Show button after scrolling 300px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ py: 10, px: 2, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 9 }}>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          </Grid>
        ))}
      </Grid>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: 'primary.main',
            color: 'black', // Arrow color as requested
            '&:hover': {
              backgroundColor: '#FFF017', // Hover color as requested
            },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Services;
