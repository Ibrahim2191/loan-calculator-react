import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Switch,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  const { toggleTheme, mode } = useThemeContext();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
          {/* Links for desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6">Home</Typography>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="h6">About</Typography>
            </Link>
            <Link
              to="/exchange-rate"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="h6">Exchange Rate</Typography>
            </Link>
            <Link
              to="/error"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="h6">Error Pagee</Typography>
            </Link>
          </Box>

          <Switch checked={mode === "dark"} onChange={toggleTheme} />
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
        <List>
          <ListItem button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItemText
                primary="Home"
                sx={{ color: mode === "dark" ? "#fff" : "#000" }}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <ListItemText
                primary="About"
                sx={{ color: mode === "dark" ? "#fff" : "#000" }}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/exchange-rate" style={{ textDecoration: "none" }}>
              <ListItemText
                primary="Exchange Rate"
                sx={{ color: mode === "dark" ? "#fff" : "#000" }}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/error-page" style={{ textDecoration: "none" }}>
              <ListItemText
                primary="Error Page"
                sx={{ color: mode === "dark" ? "#fff" : "#000" }}
              />
            </Link>
          </ListItem>
          <Divider />
          {/* <ListItem button onClick={toggleTheme}>
            <ListItemText primary={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Mode`} sx={{ color: mode === 'dark' ? '#fff' : '#000' }} />
          </ListItem> */}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
