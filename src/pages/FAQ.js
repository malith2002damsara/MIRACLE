import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';


// Define the fade-in animation
const fadeInAnimation = {
  animation: 'fadeIn 2s ease-in-out',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
};

const FAQ = ({ darkMode }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [showChatOptions, setShowChatOptions] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleChatOptions = () => {
    setShowChatOptions((prev) => !prev);
  };

  return (
    <Container
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'relative',
        backgroundImage: 'url("/faq.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        px: 4,
        pt: 6,
        color: darkMode ? '#FFD700' : '#1E90FF',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          color: darkMode ? '#FFD700' : 'blue',
          ...fadeInAnimation,
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: '100%',
          maxWidth: '800px',
          ...fadeInAnimation,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: darkMode ? '#FFD700' : 'blue', mb: 1 }}>
            Q: What types of events do you cover?
          </Typography>
          <Typography variant="body1" sx={{ color: darkMode ? '#FFF017' : 'blue' }}>
            A: We cover a wide range of events including weddings, corporate events, festivals, and private parties.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ color: darkMode ? '#FFD700' : 'blue', mb: 1 }}>
            Q: How do I request a quote?
          </Typography>
          <Typography variant="body1" sx={{ color: darkMode ? '#FFF017' : 'blue' }}>
            A: You can request a quote by contacting us through our website or calling our office.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ color: darkMode ? '#FFD700' : 'blue', mb: 1 }}>
            Q: Do you offer on-site consultations?
          </Typography>
          <Typography variant="body1" sx={{ color: darkMode ? '#FFF017' : 'blue' }}>
            A: Yes, we offer on-site consultations to understand your event's requirements and provide recommendations.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQ;
