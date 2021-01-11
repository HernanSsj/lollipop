import './App.css';
import Login from './components/login/login'
import Navbar from './components/navbar/navbar'
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="content">
       <Login/>
      </div>
     
    </div>
  );
}

export default App;
