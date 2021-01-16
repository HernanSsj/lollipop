import './App.css';
import Login from './components/login/login'
import Navbar from './components/navbar/navbar'
import SignUp from './components/sign-up/signUp';
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="content">
       {/* <Login/> */}
       <SignUp/>
      </div>
     
    </div>
  );
}

export default App;
