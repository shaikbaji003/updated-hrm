import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
// import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import './Navbar.css';
import { Tooltip } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactsIcon from '@mui/icons-material/Contacts';




const Listitem: React.FunctionComponent<{title:any}> = ({title}) => {
  return (
    <ListItem key={title} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                //   justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    // mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  
                  


                </ListItemIcon>
                <ListItemText primary={title}  />
              </ListItemButton>
            </ListItem>
  );
};

export default Listitem;
