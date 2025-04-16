import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Menu, MenuItem, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useLocation, Link } from "react-router-dom";
import initialState from "../../state/initialState";
import logo from "./logo.png";

const Navbar = () => {
    const { navItems, fileResources } = initialState;
    const location = useLocation(); // Get current URL path
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [resourcesOpen, setResourcesOpen] = useState(false);

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
        setResourcesOpen(!resourcesOpen);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "white" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Company Logo - Left Side */}
                <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                    <img 
                        src={logo}  
                        alt="Company Logo" 
                        style={{ height: "40px", width: "auto", borderRadius: "0px" }} 
                    />
                </Box>

                {/* Desktop Navigation - Aligned to the Right */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mr: 2 }}>
                    {navItems.map((item, index) => {
                        const path = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
                        const isActive = location.pathname === path || (item.toLowerCase() === "home" && location.pathname === "/");

                        return (
                            <Button 
                                key={index} 
                                component={Link} 
                                to={path} 
                                sx={{ 
                                    color: isActive ? "brown" : "black", 
                                    fontWeight: "bold",
                                    borderBottom: isActive ? "2px solid brown" : "none",
                                    "&:hover": { color: "brown" }
                                }}
                            >
                                {item}
                            </Button>
                        );
                    })}

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
                        {navItems.map((item, index) => {
                            const path = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path || (item.toLowerCase() === "home" && location.pathname === "/");

                            return (
                                <ListItem 
                                    button 
                                    key={index} 
                                    component={Link} 
                                    to={path} 
                                    sx={{ backgroundColor: isActive ? "rgba(165, 42, 42, 0.1)" : "transparent" }}
                                    onClick={handleDrawerToggle}
                                >
                                    <ListItemText primary={item} sx={{ fontWeight: isActive ? "bold" : "normal" }} />
                                </ListItem>
                            );
                        })}

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
