import React, {useEffect, useState} from "react";
//Switch solo una ruta coincide
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/ManageHome";
//import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import HeaderLog from "./common/HeaderLog";
import HeaderAdmin from "./common/HeaderAdmin";
import PageNotFound from "./PageNotFound";
//import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import ResultadosPage from "./resultados/ResultadosPage";
import RegisterPage from "./login/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./login/LoginPage";
import FixturePage from "./fixture/FixturePage";
import PosicionesPage from "./posiciones/PosicionesPage";
import RankingsPage from "./rankings/RankingsPage";
import ManagePlayerModal from "./player/ManagePlayerModal";
import PlayersPage from "./selectData/PlayersPage";
import ManageChampionModal from "./champion/ManageChampionModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as registerActions from "../redux/actions/login/registerActions";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const App = ({ userLogin , actions}) => {
  debugger;
  const history = useHistory();
  var sLocal = localStorage.getItem('userLogin');
  if(sLocal !== null){
    console.log(userLogin);
    if(userLogin.message !== "Success"){
      if(new Date() <= new Date(JSON.parse(sLocal).expires)){
        actions.loadLoginLocalSt(JSON.parse(sLocal));
      }      
    }
  }
  

  function onLogOut(event){
    event.preventDefault();
    debugger;
    localStorage.removeItem('userLogin')
    actions.loadLogoutLocalSt();
    history.push("/");
  }
  
  debugger;
  return (
    <div className="container-fluid">   
    {userLogin.message === "Success" ? (
      userLogin.type === "admin" ? (
        <HeaderAdmin onLogOut={onLogOut} userlog={userLogin}/>        
      ) : (
        <HeaderLog onLogOut={onLogOut} userlog={userLogin}/>
      )
    ) : (
      <Header />
    )}         
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/fixture" component={FixturePage} />
      <Route exact path="/player" component={ManagePlayerModal} />
      <Route exact path="/champion" component={ManageChampionModal} />
      <Route path="/register" component={RegisterPage} />
      
      <Route path="/login" component={LoginPage} />
      <Route path="/resultados" component={ResultadosPage} />  
      <Route path="/posiciones" component={PosicionesPage} /> 
      <Route path="/rankings" component={RankingsPage} /> 
      <Route path="/playerssave" component={PlayersPage} /> 
      
         
      <Route component={PageNotFound} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
  );
};

/*

function App(userLogin) {
  useEffect(() => {
    if(userLogin.length > 0){
        console.log(userLogin);
    }
  }, []);
  return (
    <div className="container-fluid">   
    {userLogin.message === "Bienvenido" ? (
      <HeaderLog />
    ) : (
      <Header />
    )}   
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}
*/


function mapStateToProps(state){
  debugger;
  return {
    userLogin: state.userLogin
  }  
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      loadLoginLocalSt: bindActionCreators(registerActions.loadLoginLocalSt, dispatch),
      loadLogoutLocalSt: bindActionCreators(registerActions.loadLogoutLocalSt, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
