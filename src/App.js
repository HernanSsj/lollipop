import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useEffect, useState} from 'react'

import {useDispatch} from "react-redux"
import {getUser} from "./actions/users"

import Login from './components/login/login'
import SignUp from './components/sign-up/signUp';
import Home from './components/home/home';
import Lollipop  from "./components/lollipop/lollipop";
import PublicRoute  from "./components/protected-route/public-route";
import PrivateRoute from './components/protected-route/private-route'


function App() {
  
  const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUser())
    },[])
   
  return (
    <div className="App">
   
          <PublicRoute path='/'  exact component={Home}/>
          <PublicRoute path='/login' component={Login}/>
          <PublicRoute path='/signup' component={SignUp}/>
          <PrivateRoute path='/app' component={Lollipop}/> 

    </div>
  );
}

export default App;
