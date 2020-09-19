import React from 'react';
import { fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SideNav from '../../components/global/SideNav'
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthContext from "../../configs/authContext";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Grid } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,

  },
  titleK: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#2196f3',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 270,
  },
  formControl: {
    display: 'flex',
    alignItems: 'right',
    //justifyContent: 'flex-end',
    margin: theme.spacing(1),
    minWidth: 120,
  },
  menu: {
    textAlign:'center',alignItems: 'right',
    fontWeight:'bold',
    fontSize:'x-large'
  },
});


class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
  }
  static contextType = AuthContext;
    render(){
    const { classes } = this.props;
    const { logout, user } = this.context;

  return (
    <div className={classes.root}>
     <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, user && this.state.open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            { user &&
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => this.setState({ open: true })}
              className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            }
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} button component="a" href="/#/">
              As Receitas da Ti Maria
          </Typography>
          {user ?(
            <IconButton color="inherit" onClick={() => logout()}>
              <Badge color="secondary">
                <ExitToAppIcon />
              </Badge>
            </IconButton>
            ):(
              <div>
              <Typography component="h1" variant="h6" color="inherit"  button component="a" href="/#/login">
              Sign IN/
              </Typography>
              <Typography component="h1" variant="h6" color="inherit" button component="a" href="/#/register">
              Sign UP
              </Typography>
              </div>
            )
          }
          </Toolbar>
        </AppBar>
        { user &&
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => this.setState({ open: false })}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <SideNav />
        </Drawer>
        }
        </div>
  )
    }
    }        

export default withStyles(useStyles)(NavBar)