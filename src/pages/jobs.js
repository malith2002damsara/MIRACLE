import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Jobs = ({ darkMode }) => {
  const [showJobDetails, setShowJobDetails] = useState(false);

  const jobListings = [
    {
      title: "Part-Time Event Assistant",
      description: "Assist with event setups, including connecting wires and bulbs, and providing general support.",
      requirements: "No prior experience required, willingness to learn, and ability to work evenings and weekends.",
    },
    {
      title: "Part-Time Electrical Helper",
      description: "Help with small electrical tasks like connecting wires and ensuring lighting systems are operational.",
      requirements: "Basic understanding of electrical systems, attention to detail, and teamwork skills.",
    },
  ];

  const handleContact = () => {
    const phoneNumber = "0776270882";
    const message = "Hello! I am interested in applying for a part-time job.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: darkMode ? '#000' : '#FFF',
        color: darkMode ? '#FFD700' : '#000',
        backgroundImage: `url('/images/background_image.jpg')`, // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Join Our Team
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
        We offer part-time job opportunities for university students and individuals who are eager to learn and help with event lighting setups.
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: darkMode ? '#222' : '#FFF',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              {jobListings.map((job, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: darkMode ? '#FFD700' : '#000' }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: darkMode ? '#FFD700' : '#000' }}
                  >
                    {job.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', color: darkMode ? '#FFD700' : '#000' }}
                  >
                    Requirements:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: darkMode ? '#FFD700' : '#000' }}
                  >
                    {job.requirements}
                  </Typography>
                </Box>
              ))}

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<WhatsAppIcon />}
                  onClick={handleContact}
                  sx={{
                    backgroundColor: darkMode ? '#FFD700' : '#1E90FF',
                    '&:hover': { backgroundColor: darkMode ? '#FFC107' : '#1C86EE' },
                    color: '#000',
                  }}
                >
                  Contact Us on WhatsApp
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Jobs;
