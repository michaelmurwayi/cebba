import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Menu, MenuItem, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import initialState from "../../state/initialState";
import logo  from "./logo.png"

const Navbar = () => {
    const { navItems, fileResources } = initialState;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [resourcesOpen, setResourcesOpen] = useState(false); // Track expansion for mobile drawer

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleResourcesToggle = () => {
        setResourcesOpen(!resourcesOpen); // Toggle Resources list in mobile drawer
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "white" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                 {/* Company Logo - Left Side */}
                 <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                    <img 
                        src={logo}  // Replace with the actual logo path
                        alt="Company Logo" 
                        style={{ height: "60px", width: "auto", borderRadius: "15px" }} // Adjust size
                    />
                </Box>
                {/* Desktop Navigation - Aligned to the Right */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mr: 2 }}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: "black", "&:hover": { color: "brown" }, fontWeight: "bold" }}>{item}</Button>
                    ))}

                    {/* Resources Dropdown */}
                    <Button 
                        sx={{ color: "green", fontWeight: "bold" }} 
                        onMouseEnter={handleMenuOpen} 
                        onClick={handleMenuOpen}
                    >
                        Resources
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        MenuListProps={{ onMouseLeave: handleMenuClose }}
                    >
                        {fileResources.map((resource) => (
                            <MenuItem key={resource.name} onClick={handleMenuClose}>
                                <a href={resource.link} download style={{ textDecoration: "none", color: "inherit" }}>
                                    {resource.name}
                                </a>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* Mobile Menu Button */}
                <IconButton 
                    color="inherit" 
                    edge="end" 
                    sx={{ color: 'black', display: { md: "none" } }} 
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Mobile Sidebar */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <Box sx={{ width: 250 }}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem button key={item} onClick={handleDrawerToggle}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}

                        {/* Resources Dropdown in Mobile Sidebar */}
                        <ListItem button onClick={handleResourcesToggle}>
                            <ListItemText primary="Resources" />
                            {resourcesOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={resourcesOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {fileResources.map((resource) => (
                                    <ListItem key={resource.name} button>
                                        <a href={resource.link} download style={{ textDecoration: "none", color: "inherit" }}>
                                            <ListItemText primary={resource.name} />
                                        </a>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
