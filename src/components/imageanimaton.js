import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import framer-motion
import './imageanimaton.css'; // Import the CSS file

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
];

const content = [
  "Our first service focuses on elegant indoor lighting solutions.",
  "Explore our beautiful outdoor lighting setups for any occasion.",
  "We offer unique, custom lighting designs tailored to your needs.",
  "Dazzling stage lighting for performances and events.",
  "Enchanting backdrop lighting perfect for photo sessions.",
  "My name is Malith Damsara, and I have a wedding website.",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000, // Increased speed for smoother transition
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000, // Increased autoplay speed for longer viewing time
  fade: true, // Adds fade transition between slides
};

const ImageAnimation = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 4 ,px:5}}>
      {/* Left Side: Slider */}
      <Box sx={{ width: '50%' }}>
        <Slider {...settings} afterChange={handleAfterChange}>
          {images.map((image, index) => (
            <div key={index} className="slick-slide">
              <motion.img
                src={image}
                alt={`Slide ${index}`}
                className="animated-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Maintain the aspect ratio of the images
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }} // Increase duration for smoother transition
              />
            </div>
          ))}
        </Slider>
      </Box>

      {/* Right Side: Content */}
      <Box sx={{ width: '50%', textAlign: 'center' }}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }} // Start with the content below
          animate={{ opacity: 1, y: 0 }} // Animate to normal position
          exit={{ opacity: 0, y: -20 }} // Exit upward
          transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
        >
          {/* <Typography variant="h2" sx={{ color: darkMode ? '#FFF017' : 'black' }}>
            Our Services
          </Typography> */}
          <Typography variant="h6" sx={{ color: darkMode ? '#FFF017' : 'black' }}>
            {content[currentIndex]}
          </Typography>
          {/* <Typography
            variant="h4"
            sx={{
              color: darkMode ? '#FFF017' : 'black', // Primary text color
              transition: 'color 0.3s ease',
            }}
          >
            Welcome to Miracle Lighting
          </Typography> */}
          {/* <Typography
            variant="h6"
            sx={{
              color: darkMode ? '#FFF017' : 'black', // Secondary text color
              transition: 'color 0.3s ease',
            }}
          >
            Your perfect lighting solution for any event.
          </Typography> */}
        </motion.div>
      </Box>
    </Box>
  );
};

export default ImageAnimation;
