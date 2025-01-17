import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { lightGreen,} from '@material-ui/core/colors';
import AuthContext from "../../configs/authContext";

const useStyles = theme => ({
  listEnd :{
    position: "absolute",
    bottom: 0,
    
  },
  green: {
    color: theme.palette.getContrastText(lightGreen[900]),
    backgroundColor: lightGreen[900],
    marginRight: '20px'
  },
})

class SideNav extends React.Component{

  static contextType = AuthContext;  

 render(){
  const {user} = this.context;
  const { classes } = this.props;
  let UR =""; 
  if(this.context.user){
       UR = `/#/receitas/user/${this.context.user.id}`
  }
    

     return(

        <div>
        {user &&
        <div>
        <ListItem button component="a" href="/#">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        
        <ListItem  button component="a" href ={UR} >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="As minhas Receitas" />
        </ListItem>
       
        <ListItem className={classes.listEnd} button component="a" href="/#/user">
          <ListItemIcon>
              <Avatar className={classes.green}>{user.name.charAt(0)+user.surname.charAt(0)}</Avatar>
          </ListItemIcon>
          <ListItemText primary={user.name +" "+user.surname}/>
        </ListItem>
        </div>
         }
      </div>
    
    
     )
 }   
}

export default withStyles(useStyles)(SideNav)
 