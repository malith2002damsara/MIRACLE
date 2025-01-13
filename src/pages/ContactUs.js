import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';

//malith

const ContactUs = ({ darkMode }) => {
  const [showChatOptions, setShowChatOptions] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleChatOptions = () => {
    setShowChatOptions((prev) => !prev);
  };

  // Handle scroll event to display scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/contact.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: darkMode ? '#FFD700' : '#1E90FF',
        padding: 2,
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: '80%', width: '100%', zIndex: 1 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: darkMode ? '#FFD700' : '#1E90FF',
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          }}
        >
          Get in Touch for Your Dream Lighting!
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: darkMode ? '#FFF017' : '#0077FF',
            textAlign: 'center',
            mb: 4,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          }}
        >
          Let's illuminate your special day with magical lighting solutions.
        </Typography>

        <Box
  sx={{
    mt: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  <Typography
    variant="h6"
    sx={{
      color: darkMode ? '#FFD700' : '#1E90FF',
      fontWeight: 'bold',
      mb: 2,
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
      textAlign: 'center',
    }}
  >
    Contact Information:
  </Typography>

  {/* Email */}
  <Typography
    sx={{
      color: darkMode ? '#FFA500' : '#007FFF',
      mb: 1,
      fontSize: { xs: '1rem', sm: '1.25rem' },
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    <EmailIcon />
    miraclelighting9@gmail.com
  </Typography>

  {/* Phone */}
  <Typography
    sx={{
      color: darkMode ? '#FFA500' : '#007FFF',
      mb: 1,
      fontSize: { xs: '1rem', sm: '1.25rem' },
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    <PhoneIcon />
    (078) 127-7601  / (077) 117-8945

        .,l;l;l
  </Typography>

  {/* WhatsApp */}
  <Typography
    sx={{
      color: darkMode ? '#FFA500' : '#007FFF',
      mb: 1,
      fontSize: { xs: '1rem', sm: '1.25rem' },
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    <WhatsAppIcon />
    Message us on WhatsApp
  </Typography>

  {/* Facebook Messenger */}
  <Typography
    sx={{
      color: darkMode ? '#FFA500' : '#007FFF',
      mb: 1,
      fontSize: { xs: '1rem', sm: '1.25rem' },
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    <FacebookIcon />
    Chat with us on Facebook Messenger
  </Typography>
</Box>


        <Box
  sx={{
    display: 'flex',
    gap: 2,
    mt: 4,
    flexWrap: 'wrap',
    justifyContent: 'center',
    zIndex: 2,
  }}
>
  {/* Email Button */}
  <Button
    variant="outlined"
    startIcon={<EmailIcon />}
    onClick={() => (window.location.href = 'mailto:miraclelighting9@gmail.com')}
    sx={{
      color: darkMode ? '#FFD700' : '#1E90FF',
      borderColor: darkMode ? '#FFD700' : '#1E90FF',
      '&:hover': {
        backgroundColor: darkMode ? '#FFD700' : '#1E90FF',
        color: '#000',
      },
      fontSize: { xs: '1rem', sm: '1.25rem' },
    }}
  >
    Email
  </Button>

  {/* WhatsApp Button */}
  <Button
    variant="outlined"
    startIcon={<WhatsAppIcon />}
    onClick={() => window.open('https://wa.me/0781277601', '_blank')}
    sx={{
      color: darkMode ? '#FFD700' : '#1E90FF',
      borderColor: darkMode ? '#FFD700' : '#1E90FF',
      '&:hover': {
        backgroundColor: darkMode ? '#FFD700' : '#1E90FF',
        color: '#000',
      },
      fontSize: { xs: '1rem', sm: '1.25rem' },
    }}
  >
    WhatsApp
  </Button>

  {/* Facebook Button */}
  <Button
    variant="outlined"
    startIcon={<FacebookIcon />}
    onClick={() => window.open('https://www.facebook.com/profile.php?id=100093008904723', '_blank')}
    sx={{
      color: darkMode ? '#FFD700' : '#1E90FF',
      borderColor: darkMode ? '#FFD700' : '#1E90FF',
      '&:hover': {
        backgroundColor: darkMode ? '#FFD700' : '#1E90FF',
        color: '#000',
      },
      fontSize: { xs: '1rem', sm: '1.25rem' },
    }}
  >
    Facebook
  </Button>

  {/* Call Button */}
  <Button
    variant="outlined"
    startIcon={<CallIcon />}
    onClick={() => (window.location.href = 'tel:+0781277601')}
    sx={{
      color: darkMode ? '#FFD700' : '#1E90FF',
      borderColor: darkMode ? '#FFD700' : '#1E90FF',
      '&:hover': {
        backgroundColor: darkMode ? '#FFD700' : '#1E90FF',
        color: '#000',
      },
      fontSize: { xs: '1rem', sm: '1.25rem' },
    }}
  >
    Call
  </Button>
</Box>
        </Box>
      </Box>

  );
};

export default ContactUs;
