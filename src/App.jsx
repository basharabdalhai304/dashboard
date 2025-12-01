import * as React from 'react';
import Box from '@mui/material/Box';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Topbar from './Components/Layout/Topbar';
import Sidebar from './Components/Layout/Sidebar';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { getDesignTokens } from '../src/Theme/Darklight';





export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  
  const currentMode = localStorage.getItem('savemode')?localStorage.getItem('savemode'):'light';
  const [mode,setMode] = React.useState(currentMode);
  
  

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>
      <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum
        </Typography>
        
      </Box>
    </Box>
    </ThemeProvider>
  );
}
