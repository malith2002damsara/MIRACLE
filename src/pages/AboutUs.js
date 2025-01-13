import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Container, Grid } from '@mui/material';
import { keyframes } from '@mui/system';

// Keyframes for wave-like animation
const waveAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for animations from left and right
const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AboutUs = ({ darkMode }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [showChatOptions, setShowChatOptions] = useState(false);
  const [aboutUsWords, setAboutUsWords] = useState([]);
  const [missionWords, setMissionWords] = useState([]);

  // Full texts
  const fullAboutUsText =
    "Welcome to Miracle Lighting! We are a leading provider of innovative and stunning lighting solutions for various events and occasions. Since 2017, we have provided 7 years of expertise in creating unique and mesmerizing ambiance for weddings, birthday parties, Christmas parties, Kathina festivals, and more. Our experienced team customizes lighting to suit your specific needs, ensuring each event is unforgettable. Whether it's soft, romantic lighting for a wedding or vibrant, festive lighting for a party, we specialize in bringing your vision to life. Let us light up your world!";

  const fullMissionText =
    "Our mission is to provide high-quality, creative, and customized lighting solutions that transform your events into memorable experiences. We are committed to offering the best customer service and ensuring every event is illuminated to perfection. Our vision is to become the premier lighting provider for all types of events, from weddings to corporate functions, by continuing to innovate and exceed expectations. We aim to inspire through lighting and enhance the beauty of every occasion.";

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split the texts into words for About Us and Mission sections
  useEffect(() => {
    setAboutUsWords(fullAboutUsText.split(' '));
    setMissionWords(fullMissionText.split(' '));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleChatOptions = () => {
    setShowChatOptions((prev) => !prev);
  };

  // Function to render words with wave-like animation
  const renderWordsWithWave = (words) => {
    return words.map((word, index) => (
      <Typography
        key={index}
        component="span"
        sx={{
          display: 'inline-block',
          animation: `${waveAnimation} 0.6s ease-out`,
          animationDelay: `${index * 0.05}s`, // Stagger the delay for each word
          opacity: 0, // Initial state before animation
          animationFillMode: 'forwards', // Ensure the animation stays at the final state
          marginRight: '4px', // Space between words
        }}
      >
        {word}
      </Typography>
    ));
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/about.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        px: 4,
        py: 6,
      }}
    >
      {/* Overlay for better readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      />

      {/* Single-Column Layout */}
<Grid container spacing={6} sx={{ position: 'relative', zIndex: 1, flexDirection: 'column' }}>
  
  {/* About Us Section */}
  <Grid item xs={12} sx={{ textAlign: 'center' }}> {/* Center the entire section */}
    <Box sx={{ animation: `${fadeInFromLeft} 1s ease-out` }}>
      <Typography 
        variant="h3" 
        sx={{ color: darkMode ? '#FFF017' : '#FFF', mb: 3, mt: 10 }}
      >
        About Us
      </Typography>
      <Box sx={{ color: darkMode ? '#FFF017' : '#FFF', lineHeight: 1.6, display: 'inline-block', textAlign: 'center' }}>
        {renderWordsWithWave(aboutUsWords)}
      </Box>
    </Box>
  </Grid>

  {/* Mission and Vision Section */}
  <Grid item xs={12} sx={{ textAlign: 'center' }}> {/* Center the entire section */}
    <Box sx={{ animation: `${fadeInFromRight} 1s ease-out` }}>
      <Typography 
        variant="h3" 
        sx={{ color: darkMode ? '#FFF017' : '#FFF', mb: 3, mt: 10 }}
      >
        Our Mission & Vision
      </Typography>
      <Box sx={{ color: darkMode ? '#FFF017' : '#FFF', lineHeight: 1.6, display: 'inline-block', textAlign: 'center' }}>
        {renderWordsWithWave(missionWords)}
      </Box>
    </Box>
  </Grid>

</Grid>

    </Container>
  );
};

export default AboutUs;
