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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import BlockIcon from '@material-ui/icons/Block';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

 
 class UserReceitas extends React.Component   {

    constructor(props) {
        super(props);
        this.state = {data: undefined,
          snackOpen: false,
         snackOpen2: false,
        };
      }

      handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ snackOpen: false })
        this.setState({ snackOpen2: false })
      };

      static contextType = AuthContext;

      componentDidMount(){
        Services.receitas.getuserRecipes(this.context.user.id).then(data => this.setState({ data: data })).catch();
      }

      deleteReceita = (id) =>{
           Services.receitas.deleteRecipe(id).then(Services.receitas.getuserRecipes(this.context.user.id).then(data => this.setState({ data: data })).catch()).catch(err=>this.setState({ snackOpen: true }));
      }
      updatePriv= (data) =>{
          Services.receitas.updateRecipe(data.rec_id,{nome:data.nome, ingre:data.ingre, prep:data.prep, priv:!data.priv, class:data.class,timesClass:data.timesClass}).then(Services.receitas.getuserRecipes(this.context.user.id).then(data => this.setState({ data: data })).catch(err=>console.log(err))).catch(err=> this.setState({snackOpen2: true}))
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
          <GridListTile key={tile.rec_id} cols={1}  >
            <img src={Image} alt={tile.nome} onClick = {() => this.props.history.push(`/receitas/details/${tile.rec_id}`)}/>
            <GridListTileBar
              title={tile.nome}
              
              actionIcon={
                  <div>
            <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={this.updatePriv.bind(this,tile)}>
                <BlockIcon />
              </IconButton>
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick = {() => this.props.history.push(`/receitas/editar/${tile.rec_id}`)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={this.deleteReceita.bind(this,tile.rec_id)}>
                <DeleteIcon />
              </IconButton>
              </div>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </main>

    <div className={classes.root}>
        <Snackbar open={this.state.snackOpen} autoHideDuration={6000} onClose={this.handleSnackClose}>
          <Alert onClose={this.handleSnackClose} severity="error">
           Ocorreu um erro a apagar a sua receita
          </Alert>
        </Snackbar>
  </div>
  <div className={classes.root}>
        <Snackbar open={this.state.snackOpen2} autoHideDuration={6000} onClose={this.handleSnackClose}>
          <Alert onClose={this.handleSnackClose} severity="error">
           Ocorreu um erro a por a sua receita privada
          </Alert>
        </Snackbar>
  </div>
    </div>
    }
     <Fab color="primary" aria-label="add" className={classes.fab} button component="a" href="/#/receitas/criar">  
     <AddIcon />
   </Fab>
   
   </div>
    
  );
}
}

export default withStyles(useStyles)(UserReceitas)