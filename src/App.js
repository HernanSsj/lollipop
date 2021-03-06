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

import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Lollipop  from "./pages/MainAppHome/lollipop";
import PublicRoute  from "./components/protected-route/public-route";
import PrivateRoute from './components/protected-route/private-route'
import Login from './pages/Login/Login';


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
