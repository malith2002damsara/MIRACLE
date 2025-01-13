// src/components/FloatingButtons.js
import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';

const FloatingButtons = ({ darkMode }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [showChatOptions, setShowChatOptions] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
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
    <>
      {/* Scroll-to-Top Button */}
      {showScroll && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: 'primary.main',
            color: 'black',
            '&:hover': { backgroundColor: darkMode ? '#FFD700' : '#1E90FF' },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}

      {/* Floating Chat and Call Buttons */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {/* Chat Icon */}
        <IconButton
          onClick={toggleChatOptions}
          sx={{
            bgcolor: darkMode ? '#FFD700' : '#1E90FF',
            '&:hover': { bgcolor: darkMode ? '#FFD700' : '#1E90FF' },
          }}
        >
          <ChatIcon sx={{ color: '#000' }} />
        </IconButton>

        {showChatOptions && (
          <>
            {/* WhatsApp Icon */}
            <IconButton
              onClick={() => window.open('https://wa.me/0781277601', '_blank')}
              sx={{
                bgcolor: darkMode ? '#FFD700' : '#1E90FF',
                '&:hover': { bgcolor: darkMode ? '#FFD700' : '#1E90FF' },
              }}
            >
              <WhatsAppIcon sx={{ color: '#000' }} />
            </IconButton>

            {/* Facebook Icon */}
            <IconButton
              onClick={() => window.open('https://www.facebook.com/profile.php?id=100093008904723', '_blank')}
              sx={{
                bgcolor: darkMode ? '#FFD700' : '#1E90FF',
                '&:hover': { bgcolor: darkMode ? '#FFD700' : '#1E90FF' },
              }}
            >
              <FacebookIcon sx={{ color: '#000' }} />
            </IconButton>
          </>
        )}

        {/* Call Icon */}
        <IconButton
          onClick={() => (window.location.href = 'tel:+0781277601')}
          sx={{
            bgcolor: darkMode ? '#FFD700' : '#1E90FF',
            '&:hover': { bgcolor: darkMode ? '#FFD700' : '#1E90FF' },
          }}
        >
          <CallIcon sx={{ color: '#000' }} />
        </IconButton>
      </Box>
    </>
  );
};

export default FloatingButtons;
