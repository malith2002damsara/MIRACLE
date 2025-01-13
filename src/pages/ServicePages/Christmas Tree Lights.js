import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Modal,
  CardMedia,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const images = [
  '/images/christmas-tree-lights-1.jpg',
  '/images/christmas-tree-lights-2.jpg',
  '/images/christmas-tree-lights-3.jpg',
  '/images/christmas-tree-lights-4.jpg',
  '/images/christmas-tree-lights-5.jpg',
]; // Replace with the actual paths to your images

const ChristmasTreeLights = ({ darkMode }) => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleOpen = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToGallery = () => {
    navigate('/gallery'); // Navigate to the gallery page
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom >
        Christmas Tree Lights
      </Typography>
      <Typography variant="body1" paragraph>
        Our Christmas Tree Lights bring a festive glow to any holiday celebration. Available in various colors and styles, they help create a warm and joyful holiday spirit.
      </Typography>

      {/* Image Gallery */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              width: '200px',
              height: '150px',
              margin: '10px',
              cursor: 'pointer',
              border: darkMode ? '2px solid #FFD700' : '2px solid #1E90FF',
              borderRadius: '8px',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
            onClick={() => handleOpen(index)}
          >
            <CardMedia
              component="img"
              image={image}
              alt={`Christmas Tree Lights ${index + 1}`}
              sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Box>
        ))}
      </Box>

      {/* More Images Button */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={goToGallery}
          sx={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: darkMode ? '#FFD700' : '#1E90FF',
            color: 'black',
            '&:hover': {
              backgroundColor: darkMode ? '#1E90FF' : '#FFD700',
              color: 'black',
            },
          }}
        >
          More Images
        </Button>
      </Box>

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
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <IconButton onClick={handlePrev} sx={{ color: darkMode ? '#FFD700' : '#1E90FF' }}>
              <ArrowBackIcon />
            </IconButton>
            <CardMedia
              component="img"
              image={images[currentImageIndex]}
              alt={`Christmas Tree Lights ${currentImageIndex + 1}`}
              sx={{
                maxWidth: '90%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: darkMode
                  ? '0 4px 20px rgba(255, 215, 0, 0.5)'
                  : '0 4px 20px rgba(30, 144, 255, 0.5)',
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

export default ChristmasTreeLights;