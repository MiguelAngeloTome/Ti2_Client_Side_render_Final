import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthContext from "../../configs/authContext";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import { lightGreen,} from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import userService from '../../services/userService';
import NavBar from '../../components/global/NavBar'
import services from '../../services';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';




const fontSize={
    fontSize:"9vh",
  }

const drawerWidth = 240;

const useStyles = theme => ({
  a:{
    align: 'center'
    },
  table:{
    width:"90vh",
    maxWidth: "5000px",
    margin: "auto",
  },
  listItemThing:{
    justifyContent: 'center', 
  },
  green: {
    color: theme.palette.getContrastText(lightGreen[900]),
    backgroundColor: lightGreen[900],
    marginRight: '20px',
    width: "20vh",
    height: "20vh",
  },
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


class Vis extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: undefined,
      }
    }
  
    static contextType = AuthContext;
  
    componentDidMount() {
      services.receitas.getRecipe(this.props.match.params.id).then(data => {this.setState({ data: data[0] });console.log(data)}).catch(er=>console.log(er));
    }

    addClass = (newValue)=>{
      let classe = this.state.data.class + newValue;
      console.log(this.state.class);
      let tiClass = this.state.data.timesClass + 1;
      services.receitas.updateRecipe(this.props.match.params.id,{nome:this.state.data.nome, ingre:this.state.data.ingre, prep:this.state.data.prep, priv:this.state.data.priv,class:classe,timesClass:tiClass}).then( services.receitas.getRecipe(this.props.match.params.id).then(data => {this.setState({ data: data[0] });console.log(data)}).catch(er=>console.log(er))).catch(er=>console.log(er))
    }
    static contextType = AuthContext;

    render() {
        const {user} = this.context;
        const { classes } = this.props;

        return (
            <div className={classes.root}>
              <NavBar></NavBar>
              <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              {this.state.data !== undefined &&
                <div className={classes.listItemThing}>
              <div className={classes.a} />
              <Typography variant="h2" gutterBottom alignCenter style={{textAlign:"center"}} className={classes.a}>
                    a{this.state.data.nome}
                </Typography>
              <ListItem className={classes.listItemThing}>
                <ListItemIcon>
                    <Avatar style = {fontSize} className={classes.green}>AB</Avatar>
                </ListItemIcon>
              </ListItem>

              <Box component="fieldset" mb={3} borderColor="transparent" style={{textAlign:"center"}} >
                <Typography style={{textAlign:"center"}} component="legend">Controlled</Typography>
                    <Rating
                         name="simple-controlled"
                         value={this.state.data.class / this.state.data.timesClass}
                        onChange={(event, newValue) => {
                          this.addClass(newValue);
                        
                    }}
                />
             </Box>
             <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div style={{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',}}>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              multiline
              inputProps={{ maxLength: 500 }}
              label="Ingredientes"
              name="ingredientes"
              value = {this.state.data.ingre}
              contentEditable={false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="surname"
              label="Procedimentos"
              name="procedimentos"
              multiline
              inputProps={{ maxLength: 1000 }}
              autoComplete="Surname"
              value = {this.state.data.prep}
              contentEditable={false}
            />
            </Grid>
            </Grid>
    </div>
  </Container>
              </div>
              }
                </main>
            </div>
        )
    }
    
}

export default withStyles(useStyles)(Vis)