import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/login/login'
import SignUp from './components/sign-up/signUp';
import Home from './components/home/home';
import Lollipop  from "./components/lollipop/lollipop";
import PublicRoute  from "./components/protected-route/public-route";
import PrivateRoute from './components/protected-route/private-route'
import Context from './components/context/context';

function App() {
  return (
    <div className="App">
      <Context>
        <Switch>
          <PublicRoute path="/" exact component={Home} isAuth={false}></PublicRoute>
          <PublicRoute path="/login" component={Login} isAuth={true}></PublicRoute>
          <PublicRoute path="/signup" component={SignUp} isAuth={true}></PublicRoute>
          <PrivateRoute path='/app' component={Lollipop} isAuth={true}></PrivateRoute>
        </Switch>
      </Context>
    
        </div>
  );
}

export default App;
