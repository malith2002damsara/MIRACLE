import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7, Close } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [eventAnchorEl, setEventAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if screen size is mobile

  const navigate = useNavigate();

  // Handle menu open/close
  const handleServicesHover = (event) => setServicesAnchorEl(event.currentTarget);
  const handleEventHover = (event) => setEventAnchorEl(event.currentTarget);
  const handleClose = () => {
    setServicesAnchorEl(null);
    setEventAnchorEl(null);
  };

  const handleServicesClick = () => {
    navigate('/services');
    handleClose(); // Ensure any menu is closed after navigation
  };
  const handleEventClick = () => {
    navigate('/event');
    handleClose(); // Ensure any menu is closed after navigation
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: darkMode ? '#333' : '#FFF017',
        color: darkMode ? '#FFF' : '#333',
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link to="/">
            <img src={Logo} alt="Miracle Lighting Logo" style={{ height: 40, marginRight: 16 }} />
          </Link>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Cursive',
              fontWeight: 'bold',
              color: darkMode ? '#FFF017' : '#333',
            }}
          >
            Miracle Lighting
          </Typography>
        </Box>

        {/* Desktop Menu */}
        {!isMobile ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
             <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFD700',
                 color: '#333', 

              },
            }}
          >
            Home
          </Button>

           {/* Services Dropdown */}
           <Button
            color="inherit"
            aria-controls="services-menu"
            aria-haspopup="true"
            onMouseEnter={handleServicesHover}
            onClick={handleServicesClick}
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFD700',
                 color: '#333', 

              },
            }}
          >
            Services
          </Button>
          <Menu
            id="services-menu"
            anchorEl={servicesAnchorEl}
            open={Boolean(servicesAnchorEl)}
            onClose={handleClose}
            MenuListProps={{
              onMouseLeave: handleClose,
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                bgcolor: '#FFF8DC',
                color: '#333',
                mt: 1.5,
                '& .MuiMenuItem-root': {
                  padding: '10px 20px',
                },
                '& .MuiMenuItem-root:hover': {
                  bgcolor: '#FFD700',
                },
              },
            }}
          >
            <MenuItem component={Link} to="/indoor-lighting" onClick={handleClose}>
              Indoor Lighting
            </MenuItem>
            <MenuItem component={Link} to="/outdoor-lighting" onClick={handleClose}>
              Outdoor Lighting
            </MenuItem>
            <MenuItem component={Link} to="/backdrop-lighting" onClick={handleClose}>
              Backdrop Lighting
            </MenuItem>
            <MenuItem component={Link} to="/Up-lighting" onClick={handleClose}>
              Up Lighting
            </MenuItem>
            <MenuItem component={Link} to="/String-Lights" onClick={handleClose}>
            String Lights
            </MenuItem>
            <MenuItem component={Link} to="/Pathway-Lights" onClick={handleClose}>
            Pathway Lights
            </MenuItem>
            <MenuItem component={Link} to="/Light-up-Reindeer-or-Snowman" onClick={handleClose}>
            Light up Reindeer or Snowman
            </MenuItem>
            <MenuItem component={Link} to="/Light-Up-Letters" onClick={handleClose}>
            Light Up Letters
            </MenuItem>
            <MenuItem component={Link} to="/Festoon-Lights" onClick={handleClose}>
            Festoon Lights
            </MenuItem>
            <MenuItem component={Link} to="/Fairy-Lights" onClick={handleClose}>
            Fairy Lights
            </MenuItem>
            <MenuItem component={Link} to="/Christmas-Tree-Lights" onClick={handleClose}>
            Christmas Tree Lights
            </MenuItem>
            <MenuItem component={Link} to="/Chinese-Lanterns" onClick={handleClose}>
            Chinese Lanterns
            </MenuItem>
            <MenuItem component={Link} to="/Chandeliers" onClick={handleClose}>
            Chandeliers
            </MenuItem>
          </Menu>

             {/* Event Dropdown */}
          <Button
  color="inherit"
  aria-controls="event-menu"
  aria-haspopup="true"
  onClick={handleEventClick}
  onMouseEnter={handleEventHover}
  sx={{
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    '&:hover': {
      bgcolor: '#FFD700',
       color: '#333', 

    },
  }}
>
  Event
</Button>
<Menu
  id="event-menu"
  anchorEl={eventAnchorEl}
  open={Boolean(eventAnchorEl)}
  onClose={handleClose}
  MenuListProps={{
    onMouseLeave: handleClose,
  }}
  PaperProps={{
    elevation: 0,
    sx: {
      bgcolor: '#FFF8DC',
      color: '#333',
      mt: 1.5,
      '& .MuiMenuItem-root': {
        padding: '10px 20px',
      },
      '& .MuiMenuItem-root:hover': {
        bgcolor: '#FFD700',
      },
    },
  }}
>
  <MenuItem component={Link} to="/wedding" onClick={handleClose}>
    Wedding
  </MenuItem>
  <MenuItem component={Link} to="/birthday-parties" onClick={handleClose}>
    Birthday Parties
  </MenuItem>
  <MenuItem component={Link} to="/christmas-parties" onClick={handleClose}>
    Christmas Parties
  </MenuItem>
  <MenuItem component={Link} to="/kathina-festival" onClick={handleClose}>
    Kathina Festival
  </MenuItem>
</Menu>
<Button
            color="inherit"
            component={Link}
            to="/gallery"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFD700',
                 color: '#333', 

              },
            }}
          >
            Gallery
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFD700',
                 color: '#333', 

              },
            }}
          >
            Contact Us
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFD700',
                 color: '#333', 

              },
            }}
          >
            About Us
          </Button>


          <Button
            color="inherit"
            component={Link}
            to="/faq"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFD700',
                 color: '#333', 

              },
            }}
          >
            FAQ
          </Button>


            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        ) : (
          // Mobile Menu (Hamburger Icon)
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

   {/* Mobile Drawer */}
<Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
  <Box
    sx={{
      width: 250,
      bgcolor: darkMode ? '#424242' : '#FFFFFF', // Gray for Dark Mode, White for Light Mode
      color: darkMode ? '#FFFFFF' : '#000000', // Text color adjusts for readability
      height: '100%',
    }}
    role="presentation"
    onClick={toggleDrawer}
  >
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
      <IconButton onClick={toggleDrawer}>
        <Close sx={{ color: darkMode ? '#FFFFFF' : '#000000' }} />
      </IconButton>
    </Box>
    <Divider sx={{ bgcolor: darkMode ? '#616161' : '#E0E0E0' ,color: darkMode ? 'white' : 'black'}} />
    <List>
      {[
        { text: 'Home', to: './' },
        { text: 'Services', to: './services' },
        { text: 'Event', to: './event' },
        { text: 'Contact', to: './contact' },
        { text: 'Gallery', to: './gallery' },
        { text: 'About Us', to: './about' },
        { text: 'FAQ', to: './faq' },
      ].map(({ text, to }) => (
        <ListItem key={text} disablePadding>
          <ListItemButton
            component={Link}
            to={to}
            sx={{
              '&:hover': {
                bgcolor: '#FFD700',
              },
            }}
          >
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
      <Divider sx={{ my: 1, bgcolor: darkMode ? '#616161' : '#E0E0E0' }} />
      {/* Dark Mode Toggle with Icon */}
      <ListItem disablePadding>
        <ListItemButton onClick={toggleDarkMode}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <ListItemText primary={darkMode ? 'Dark Mode Active' : 'Light Mode Active'} />
          </Box>
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
</Drawer>

    </AppBar>
  );
};

export default Navbar;
