import React, { useState } from 'react';
import { Box, Typography, Container, IconButton, Modal,CardMedia, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const images = [
  '/wedding1.jpg',
  '/wedding2.jpg',
  '/wedding3.jpg',
  '/wedding4.jpg',
  '/wedding5.jpg',
];

const Wedding = ({ darkMode }) => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Open the modal with selected image index
  const handleOpen = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => setOpen(false);

  // Go to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the gallery page
  const goToGallery = () => {
    navigate('/gallery');  // Navigate to the gallery page
  };

  return (
    <Container sx={{ py: 8 }}>
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
          color: darkMode ? '#FFD700' : 'black',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Wedding Events
        </Typography>
        <Typography variant="body1" paragraph>
          Weddings are special moments that deserve the perfect ambiance. Our wedding lighting services create a magical atmosphere that complements your beautiful day. From elegant chandeliers to fairy lights, we offer a variety of options to make your wedding unforgettable.
        </Typography>

        {/* Display 5 images */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: '200px',
                height: '200px',
                margin: '10px',
                cursor: 'pointer',
                border: darkMode ? '2px solid #FFD700' : '2px solid #1E90FF',
                borderRadius: '8px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)', // Smooth zoom effect
                },
              }}
            >
              <img
                src={image}
                alt={`Wedding Lighting ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
                onClick={() => handleOpen(index)}
              />
            </Box>
          ))}
        </Box>

        {/* More Images Button */}
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={goToGallery}  // Click event to go to gallery
            sx={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: darkMode ? '#FFD700' : '#1E90FF', // Button color based on darkMode
              color: 'black',
              '&:hover': {
                backgroundColor: darkMode ? '#1E90FF' : '#FFD700', // Hover color based on darkMode
                color: 'black',
              },
            }}
          >
            More Images
          </Button>
        </Box>
      </Box>

      {/* Scroll-to-top button */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: darkMode ? '#1E90FF' : '#FFD700',
          color: 'black',
          '&:hover': {
            backgroundColor: '#FFF017',
          },
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>

      {/* Modal for Image Viewer */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: darkMode ? '#333' : '#fff',
            boxShadow: 24,
            maxWidth: '90%',
            maxHeight: '90%',
            outline: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            overflow: 'hidden',
            p: 2,
            borderRadius: '8px',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: darkMode ? '#FFD700' : '#1E90FF',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Image Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
            <IconButton onClick={handlePrev} sx={{ color: darkMode ? '#FFD700' : '#1E90FF' }}>
              <ArrowBackIcon />
            </IconButton>
            <CardMedia
              component="img"
              image={images[currentImageIndex]}
              alt={`Kathina Festival ${currentImageIndex + 1}`}
              sx={{
                maxWidth: '90%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: darkMode
                  ? '0 4px 20px rgba(255, 215, 0, 0.5)' // Golden highlight for dark mode
                  : '0 4px 20px rgba(30, 144, 255, 0.5)', // Blue highlight for light mode
              }}
            />
            <IconButton onClick={handleNext} sx={{ color: darkMode ? '#FFD700' : '#1E90FF' }}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default Wedding;
