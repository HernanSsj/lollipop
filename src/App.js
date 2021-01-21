import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/login/login'
import Navbar from './components/navbar/navbar'
import SignUp from './components/sign-up/signUp';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="content">
        <Switch>
            <Route path="/" exact>
              <Home /> 
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
        </Switch>
      </div>
     
    </div>
  );
}

export default App;
