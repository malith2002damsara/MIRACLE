import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'; // Import the Footer component
import { CssBaseline, Box } from '@mui/material';
import './App.css';
import FloatingButtons from './components/FloatingButtons';

// Import components
import Navbar from './components/Navbar';


// Import pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Event from './pages/Event';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

//services
import IndoorLighting from './pages/ServicePages/IndoorLighting';
import OutdoorLighting from './pages/ServicePages/OutdoorLighting';
import BackdropLighting from './pages/ServicePages/BackdropLighting';
import Chandeliers from './pages/ServicePages/Chandeliers';
import ChineseLanterns from './pages/ServicePages/Chinese Lanterns';
import ChristmasTreeLights from './pages/ServicePages/Christmas Tree Lights';
import FairyLights from './pages/ServicePages/Fairy Lights';
import FestoonLights from './pages/ServicePages/Festoon Lights';
import LightUpLetters from './pages/ServicePages/Light Up Letters';
import LightUpReindeerOrSnowman from './pages/ServicePages/Light-up Reindeer or Snowman';
import PathwayLights from './pages/ServicePages/Pathway Lights';
import StringLights from './pages/ServicePages/String Lights';
import UpLighting from './pages/ServicePages/Up-lighting';

// New Imports for Event pages
import Wedding from './pages/Wedding';
import BirthdayParties from './pages/BirthdayParties';
import ChristmasParties from './pages/ChristmasParties';
import KathinaFestival from './pages/KathinaFestival';
import FAQ from './pages/FAQ';


// Install a library for the carousel/slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Jobs from './pages/jobs';


const App = () => {
  // Dark mode state, loading from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // Effect to save dark mode preference in localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ bgcolor: darkMode ? '#121212' : '#fff', minHeight: '100vh' }}>
      <CssBaseline />
      <Router>
        {/* Pass toggleDarkMode and darkMode to the Navbar component */}
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/event" element={<Event darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactUs darkMode={darkMode} />} />
          <Route path="/about" element={<AboutUs darkMode={darkMode} />} />
          <Route path="/FAQ" element={<FAQ darkMode={darkMode}/>} />
          <Route path="/jobs" element={<Jobs darkMode={darkMode} />} />
        

          <Route path="/indoor-lighting" element={<IndoorLighting darkMode={darkMode} />} />
          <Route path="/outdoor-lighting" element={<OutdoorLighting darkMode={darkMode} />} />
          <Route path="/backdrop-lighting" element={<BackdropLighting darkMode={darkMode}/>} />
          <Route path="/Chandeliers" element={<Chandeliers darkMode={darkMode} />} />
          <Route path="/Chinese-Lanterns" element={<ChineseLanterns darkMode={darkMode}/>} />
          <Route path="/Christmas-Tree-Lights" element={<ChristmasTreeLights darkMode={darkMode} />} />
          <Route path="/Fairy-Lights" element={<FairyLights darkMode={darkMode}/>} />
          <Route path="/Festoon-Lights" element={<FestoonLights darkMode={darkMode}/>} />
          <Route path="/Light-Up-Letters" element={<LightUpLetters darkMode={darkMode}/>} />
          <Route path="/Light-up-Reindeer-or-Snowman" element={<LightUpReindeerOrSnowman darkMode={darkMode}/>} />
          <Route path="/Pathway-Lights" element={<PathwayLights darkMode={darkMode}/>} />
          <Route path="/String-Lights" element={<StringLights darkMode={darkMode}/>} />
          <Route path="/Up-lighting" element={<UpLighting darkMode={darkMode}/>} />
          
          <Route path="/wedding" element={<Wedding darkMode={darkMode}/>} />
          <Route path="/birthday-parties" element={<BirthdayParties darkMode={darkMode} />} />
          <Route path="/christmas-parties" element={<ChristmasParties darkMode={darkMode} />} />
          <Route path="/kathina-festival" element={<KathinaFestival darkMode={darkMode}/>} />

        </Routes>
        <FloatingButtons darkMode={darkMode} />
        <Footer darkMode={darkMode} /> 
      </Router>
    </Box>
  );
};

export default App;
