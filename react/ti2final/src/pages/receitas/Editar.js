import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import services from "../../services";
import NavBar from '../../components/global/NavBar';
import EditIcon from '@material-ui/icons/Edit';
import AuthContext from "../../configs/authContext";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    sign: {
      margin: theme.spacing(0, 0, 2),
    },
  });

 
 class EditarReceitas extends React.Component   {
    constructor(props) {
        super(props);
        this.state = { 
         nome: "",
         ingre: "",
         prep: "",
         data:undefined,
         snackOpen: false,
         snackOpen2: false,

      };
      }

      static contextType = AuthContext;

      componentDidMount() {
        services.receitas.getRecipe(this.props.match.params.id).then(data => {this.setState({nome: data[0].nome, ingre: data[0].ingre, prep: data[0].prep, data: data[0] });console.log(data)}).catch(er=>console.log(er));
      }

      handleSubmit(evt) {
        evt.preventDefault();
        if(this.state.nome !==null&& this.state.nome !==undefined && this.state.nome !=="" && this.state.ingre !==null && this.state.ingre !== undefined && this.state.ingre !=="" && this.state.prep !==null && this.state.prep !== undefined && this.state.prep !==""){
          services.receitas.updateRecipe(this.props.match.params.id,{ nome: this.state.nome, ingre: this.state.ingre, prep: this.state.prep, priv:this.state.data.priv, class:this.state.data.class,timesClass:this.state.data.timesClass}).then(()=> this.props.history.push("/"))
        .catch(this.setState({ snackOpen2: true }))
        }else{
          this.setState({ snackOpen: true });
        }
        
      }

      handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ snackOpen: false })
        this.setState({ snackOpen2: false })
      };

 render(){
    const { classes } = this.props;

  return (
        
    <div className={classes.root}>
    <NavBar></NavBar>
    {this.state.data &&
    <main className={classes.content}>
    <div className={classes.appBarSpacer} />
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div style={{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',}}>

      <Avatar className={classes.avatar}>
        <EditIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Editar Receita
      </Typography>
      <form className={classes.form} noValidate onSubmit={(evt) => this.handleSubmit(evt)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="title"
              variant="outlined"
              label="Nome da Receita"
              inputProps={{ maxLength: 250 }}
              required
              fullWidth
              autoFocus
              onChange={(evt) => this.setState({ nome: evt.target.value })}
              value = {this.state.nome}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              multiline
              inputProps={{ maxLength: 500 }}
              label="Ingredientes"
              name="ingredientes"
              onChange={(evt) => this.setState({ ingre: evt.target.value })}
              value = {this.state.ingre}
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
              onChange={(evt) => this.setState({ prep: evt.target.value })}
              value = {this.state.prep}
            />
            </Grid>
            </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Editar Receita
        </Button>
      </form>
    </div>
  </Container>
  </main>
  }

<div className={classes.root}>
        <Snackbar open={this.state.snackOpen} autoHideDuration={6000} onClose={this.handleSnackClose}>
          <Alert onClose={this.handleSnackClose} severity="error">
           Tem de preencher todos os campos
          </Alert>
        </Snackbar>
</div>
<div className={classes.root}>
        <Snackbar open={this.state.snackOpen2} autoHideDuration={6000} onClose={this.handleSnackClose}>
          <Alert onClose={this.handleSnackClose} severity="error">
           Aconteceu um erro ao editar a receita.
          </Alert>
        </Snackbar>
</div>
  </div>

);
}
}
export default withStyles(useStyles)(EditarReceitas)