import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/global/PrivateRoute";
import About from '../pages/about/about';
import RegisterPage from "../pages/auth/Register";
import LoginPage from "../pages/auth/Login";
import AuthContext from "../configs/authContext";
import HomePage from "../pages/home/Home";
import User from "../pages/user/User";
import ReceitasCriar from "../pages/receitas/Criar";
import ReceitasVis from "../pages/receitas/Vis";
import UserReceitas from "../pages/receitas/UserReceitas";
import EditarReceitas from "../pages/receitas/Editar";

export default class RouterComponent extends React.Component {
  static contextType = AuthContext;
  render() {
    const { user} = this.context;
    return (
      <Router>
          {user ? ( 
             <Switch>

            <Route exact path="/about" component={About} />
           <PrivateRoute path="/user/" component={User} />
           <PrivateRoute path="/receitas/criar" component={ReceitasCriar} />
           <PrivateRoute exact path="/receitas/details/:id" component={ReceitasVis} />
           <PrivateRoute exact path="/receitas/user/:id" component={UserReceitas} />
           <PrivateRoute exact path="/receitas/editar/:id" component={EditarReceitas} />

            <Route path="*" component={HomePage} />
            </Switch>
          ):(
            <Switch>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/receitas/details/:id" component={ReceitasVis} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="*" component={HomePage} />
            </Switch>
          )}
          


      
      </Router>
    );
  }
}