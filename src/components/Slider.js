import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

const slides = [
  { name: 'Wedding 1', img: '/wedding.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/indoor-lighting' },
  { name: 'Wedding 2', img: '/wedding1.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/outdoor-lighting' },
  { name: 'Wedding 3', img: '/wedding2.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/custom-designs' },
  { name: 'Wedding 4', img: '/wedding3.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/stage-lighting' },
  { name: 'Wedding 5', img: '/wedding12.jpg', des: 'X-Dev, Transforming code into visual poetry..!', topic: 'WEDDING', path: '/backdrop-lighting' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box className="carousel" sx={{ position: 'relative', overflow: 'hidden', height: '85vh', display: 'flex' }}>
      {/* Navigation Buttons */}
      <Button onClick={handlePrev} sx={{ position: 'absolute', left: '250px', top: '80%', zIndex: 10, borderRadius: '70%', minWidth: '50px', height: '50px', padding: 0, backgroundColor: '#FFF017', color: 'black', '&:hover': { backgroundColor: '#134df3' }, }} variant="contained">&lt;</Button>
      <Button onClick={handleNext} sx={{ position: 'absolute', right: '1100px', top: '80%', zIndex: 10, borderRadius: '70%', minWidth: '50px', height: '50px', padding: 0, backgroundColor: '#FFF017', color: 'black', '&:hover': { backgroundColor: '#134df3' }, }} variant="contained">&gt;</Button>

      {/* Carousel Wrapper with Smooth Fade Animation */}
      <Box className="slider-wrapper" sx={{ display: 'flex', transition: 'transform 1.5s ease, opacity 1s ease-in-out', transform: `translateX(-${currentIndex * 100}%)`, width: '100%' }}>
        {slides.map((slide, index) => (
          <Box key={index} className="slide" sx={{ minWidth: '100%', height: '100%', position: 'relative', opacity: currentIndex === index ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}>
            <img src={slide.img} alt={slide.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            
            {/* Content and Buttons */}
            <Box className="content" sx={{ position: 'absolute', top: '30px', left: '30px', color: '#fff' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>{slide.name}</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>{slide.des}</Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>{slide.topic}</Typography>
              
              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Button variant="contained" onClick={() => navigate(slide.path)} sx={{ backgroundColor: '#FFF017', color: '#000', '&:hover': { backgroundColor: '#134df3', color: '#FFF017' } }}>Details</Button>
                <Button variant="contained" onClick={() => navigate('/gallery')} sx={{ backgroundColor: '#FFF017', color: '#000', '&:hover': { backgroundColor: '#134df3', color: '#FFF017' } }}>To Gallery</Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Thumbnails */}
      <Box className="thumbnail-container" sx={{ position: 'absolute', right: '10px', top: '75%', display: 'flex', flexDirection: 'row', gap: '8px' }}>
        {slides.map((slide, index) => {
          const isSelected = currentIndex === index;
          const thumbnailSize = isSelected ? '150px' : '100px';
          return (
            <Box key={index} onClick={() => handleThumbnailClick(index)} sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '3px solid yellow', borderRadius: '12px', padding: '-2px', transition: 'transform 0.5s ease', '&:hover': { transform: 'scale(1.1)', } }}>
              <img src={slide.img} alt={slide.name} style={{ width: thumbnailSize, height: 'auto', borderRadius: '8px' }} />
              <Typography variant="caption" sx={{ color: 'yellow', textAlign: 'center' }}>{slide.name}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Slider;
