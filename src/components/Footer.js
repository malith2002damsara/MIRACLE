import React from 'react';
import { Box, Typography, Link, Grid, Button } from '@mui/material';
import { Facebook, Instagram, WhatsApp, Mail, YouTube, Phone } from '@mui/icons-material'; 
import TikTokIcon from '@mui/icons-material/MusicNote'; 

const Footer = ({ darkMode }) => {
  return (
    <Box
      sx={{
        bgcolor: darkMode ? '#333' : '#FFF017',
        color: darkMode ? '#FFF' : '#000',
        py: 4,
        px: 2,
      }}
    >
      {/* First Row: Get Started Links, Our Company, Contact Us */}
      <Grid
        container
        spacing={4}
        sx={{ mb: 4 }}
        justifyContent="space-around"
        // alignItems="flex-start"
      >
        {/* Column 1: Get Started Links */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center' }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ fontWeight: 'bold' , color: darkMode ? '#FFF' : '#000' }}
          >
            Get Started
          </Typography>
          <Grid container spacing={8} justifyContent="center">
            <Grid item xs={6}>
              <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>Home</Link>
              <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>About</Link>
              <Link href="/services" color="inherit" sx={{ display: 'block', mb: 1 }}>Services</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="/gallery" color="inherit" sx={{ display: 'block', mb: 1 }}>Gallery</Link>
              <Link href="/faq" color="inherit" sx={{ display: 'block', mb: 1 }}>FAQ</Link>
              <Link href="/contact" color="inherit" sx={{ display: 'block' }}>Contact Us</Link>
            </Grid>
          </Grid>
        </Grid>

        {/* Column 2: Our Company */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center' }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: darkMode ? '#FFF' : '#000'}}
          >
            Our Company
          </Typography>
          <Link href="/jobs" color="inherit" sx={{ display: 'block', mb: 1 }}>Jobs</Link>
          <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>About Us</Link>
        </Grid>

        {/* Column 3: Quick Contact */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center'}}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: darkMode ? '#FFF' : '#000' }}
          >
            Quick Contact
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: { xs: 'center' } }}>
            <Button
              href="mailto:miraclelighting9@gmail.com"
              variant="outlined"
              startIcon={<Mail />}
              sx={{
                bgcolor: darkMode ? '#555' : '#FFF017',
                color: darkMode ? '#FFFFFF' : '#000',
                borderColor: darkMode ? '#FFF017' : '#000',
                '&:hover': {
                  bgcolor: darkMode ? '#FFF017' : '#999',
                  color: darkMode ? '#000' : '#000',
                  borderColor: darkMode ? '#FFF017' : '#000',

                },
              }}
            >
              Email
            </Button>
            <Button
              href="https://wa.me/0776270882"
              variant="outlined"
              startIcon={<WhatsApp />}
              sx={{
                bgcolor: darkMode ? '#555' : '#FFF017',
                color: darkMode ? '#FFFFFF' : '#000',
                borderColor: darkMode ? '#FFF017' : '#000',
                '&:hover': {
                  bgcolor: darkMode ? '#FFF017' : '#999',
                  color: darkMode ? '#000' : '#000',
                  borderColor: darkMode ? '#FFF017' : '#000',

                },
              }}
            >
              WhatsApp
            </Button>
            <Button
              href="tel:0771178945"
              variant="outlined"
              startIcon={<Phone />}
              sx={{
                bgcolor: darkMode ? '#555' : '#FFF017',
                color: darkMode ? '#FFFFFF' : '#000',
                borderColor: darkMode ? '#FFF017' : '#000',
                '&:hover': {
                  bgcolor: darkMode ? '#FFF017' : '#999',
                  color: darkMode ? '#000' : '#000',
                  borderColor: darkMode ? '#FFF017' : '#000',

                },
              }}
            >
              Call
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Second Row: Social Media Icons */}
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3,
          mb: 4,
        }}
      >
        {[
          { icon: <Mail />, link: "mailto:miraclelighting9@gmail.com", label: "Email" },
          { icon: <WhatsApp />, link: "https://wa.me/0781277601", label: "WhatsApp" },
          { icon: <Facebook />, link: "https://www.facebook.com/", label: "Facebook" },
          { icon: <Instagram />, link: "https://www.instagram.com/", label: "Instagram" },
          { icon: <YouTube />, link: "https://www.youtube.com/", label: "YouTube" },
          { icon: <TikTokIcon />, link: "https://www.tiktok.com/", label: "TikTok" }
        ].map((social, index) => (
          <Box key={index} textAlign="center">
            <Link 
              href={social.link} 
              color="inherit" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{
                '&:hover .icon': {
                  transform: 'scale(1.2)',
                  color: darkMode ? '#FFD700' : '#1E90FF',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                },
              }}
            >
              <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {React.cloneElement(social.icon, { className: 'icon', sx: { fontSize: 36 } })}
              </Box>
            </Link>
            <Typography variant="caption" display="block">
              {social.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        At Miracle Lighting, we illuminate your moments with style.Our passion for creativity and quality ensures that every event is a memorable experience.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        For inquiries, please call us at: <Link href="tel:0781277601">0781277601</Link>, <Link href="tel:0771178945">0771178945</Link> or email us at: <Link href="mailto:miraclelighting9@gmail.com">miraclelighting9@gmail.com</Link>.
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        Follow us on social media for the latest updates and inspiration!
      </Typography>

      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        © 2024 Miracle Lighting. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
