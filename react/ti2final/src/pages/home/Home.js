import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';
import Image from '../../assets/delete.jpg';
import NavBar from '../../components/global/NavBar'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AuthContext from "../../configs/authContext";
import Services from "../../services/index"

const useStyles = theme => ({
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    display: 'flex',
  },
  gridList: {
    height:550,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
});

 
 class HomePage extends React.Component   {

    constructor(props) {
        super(props);
        this.state = {data: undefined};
      }

      static contextType = AuthContext;

      componentDidMount(){
        Services.receitas.getRecipes().then(data => this.setState({ data: data })).catch();
      }

 render(){
    const { classes } = this.props;

  return (
    <div >
        { this.state.data !==undefined &&
    <div className={classes.root}>
    <NavBar></NavBar>
    <main className={classes.content}>
    <div className={classes.appBarSpacer} />
      <GridList cellHeight={250} className={classes.gridList} cols={3} >
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Receitas</ListSubheader>
        </GridListTile>
        {this.state.data.map((tile) => (
          !tile.priv &&
          <GridListTile key={tile.rec_id} cols={1}  >
            <img src={Image} alt={tile.nome} onClick = {() => this.props.history.push(`/receitas/details/${tile.rec_id}`)}/>
            <GridListTileBar
              title={tile.nome}
              
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </main>
    </div>
    }
     <Fab color="primary" aria-label="add" className={classes.fab} button component="a" href="/#/receitas/criar">  
     <AddIcon />
   </Fab>
   
   </div>
    
  );
}
}

export default withStyles(useStyles)(HomePage)