import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import { Home } from '@mui/icons-material';
import GroupIcon from '@mui/icons-material/Group';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate, useLocation } from "react-router-dom";


const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [{
  "text":"Dashboard",
  "icon":<Home/>,
  "route":'/'
},
{
  "text":"Manage",
  "icon":<GroupIcon/>,
  "route":'/manage'
},
{
  "text":"Contacts Info",
  "icon":<ContactsIcon/>,
  "route":'/contacts'
},
{
  "text":"Invoices Balances",
  "icon":<ReceiptIcon/>,
  "route":'/invoices'
}

];

const Array2 = [{
  "text":"Profile Form",
  "icon":<AccountCircleIcon/>,
  "route":'/profile-form'
},
{
  "text":"Calendar",
  "icon":<CalendarMonthIcon/>,
  "route":'/calendar'
},
{
  "text":"FaQ Page",
  "icon":<LiveHelpIcon/>,
  "route":'/faqpage'
}

];

const Array3 = [{
  "text":"Bar Chart",
  "icon":<BarChartIcon/>,
  "route":'/barchart'
},
{
  "text":"Pie Chart",
  "icon":<PieChartOutlineIcon/>,
  "route":'/piechart'
},
{
  "text":"Line Chart",
  "icon":<ShowChartIcon/>,
  "route":'/linechart'
}
,
{
  "text":"Geography Chart",
  "icon":<PublicIcon/>,
  "route":'/geography'
}

];


const Sidebar = ({open , handleDrawerClose}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    return(
        <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {Array1.map((item) => (
            <ListItem key={item.icon} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.route);
              }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === item.route ? "primary.main" : "transparent",
                    '&:hover': {
                      bgcolor: location.pathname === item.route ? "primary.dark" : "action.hover",
                    },
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array2.map((item) => (
            <ListItem key={item.icon} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.route);
              }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === item.route ? "primary.main" : "transparent",
                    '&:hover': {
                      bgcolor: location.pathname === item.route ? "primary.dark" : "action.hover",
                    },
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array3.map((item) => (
            <ListItem key={item.icon} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.route);
              }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor: location.pathname === item.route ? "primary.main" : "transparent",
                    '&:hover': {
                      bgcolor: location.pathname === item.route ? "primary.dark" : "action.hover",
                    },
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}

export default Sidebar;