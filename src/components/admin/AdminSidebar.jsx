import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import './css/adminSidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="burger-menu" onClick={toggleSidebar}>
        <MenuIcon />
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">Admin</div>
        <List>
          <ListItem component={Link} to="/chessbar/admin">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem component={Link} to="/chessbar/admin/users">
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Utilisateurs" />
          </ListItem>
          <ListItem component={Link} to="/chessbar/admin/bars">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Bars" />
          </ListItem>
          <ListItem component={Link} to="/chessbar/admin/tournaments">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Tournois" />
          </ListItem>
          <ListItem component={Link} to="/chessbar/admin/rankings">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Classements" />
          </ListItem>
          <ListItem component={Link} to="/chessbar/logout">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Se déconnecter" />
          </ListItem>
          <ListItem component={Link} to="/chessbar/">
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItem>
        </List>
        <div className="sidebar-footer">
          &copy; 2024 ChessBar
        </div>
      </div>
    </>
  );
};

export default Sidebar;
