import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useEffect} from 'react'
import axios from 'axios'
import Login from './components/login/login'
import SignUp from './components/sign-up/signUp';
import Home from './components/home/home';
import Lollipop  from "./components/lollipop/lollipop";
import PublicRoute  from "./components/protected-route/public-route";
import PrivateRoute from './components/protected-route/private-route'


function App() {
  useEffect(()=>{
    async function getUser (){
     const response = await axios.get('http://localhost:5000/user', {withCredentials: true})
     if(response.data){
         localStorage.setItem('user', JSON.stringify(response.data));
     }else{
         localStorage.removeItem('user')
     }
    }
     getUser()
     
 },[])

  return (
    <div className="App">
        <Switch>
          <PublicRoute path='/' exact component={Home}></PublicRoute>
          <PublicRoute path='/login' component={Login}></PublicRoute>
          <PublicRoute path='/signup' component={SignUp}></PublicRoute>
          <PrivateRoute path='/app' component={Lollipop}></PrivateRoute>
        </Switch>
    </div>
  );
}

export default App;
