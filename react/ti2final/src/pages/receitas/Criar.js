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
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import AuthContext from "../../configs/authContext";


const useStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
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

 
 class CriarReceitas extends React.Component   {
    constructor(props) {
        super(props);
        this.state = { nome: "", ingre: "", prep: ""};
      }

      static contextType = AuthContext;

      handleSubmit(evt) {
        evt.preventDefault();
        services.receitas.insertRecipe({ nome: this.state.nome, ingre: this.state.ingre, prep: this.state.prep,user_id: this.context.user.id}).then(()=> this.props.history.push("/"))
        .catch((err) => {console.log(err)})
      }

 render(){
    const { classes } = this.props;

  return (
      <div>
    <div className={classes.root}>
        <NavBar></NavBar>
    </div>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div style={{ 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',}}>

      <Avatar className={classes.avatar}>
        <AddCircleOutlineSharpIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Criar Receita
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
          Criar Receita
        </Button>
      </form>
    </div>
  </Container>
  </div>
);
}
}
export default withStyles(useStyles)(CriarReceitas)