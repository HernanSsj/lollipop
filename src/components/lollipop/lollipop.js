
import axios from 'axios'
import './lollipop-style.css'
import { useHistory } from "react-router"
const Lollipop =  ()=>{
    let history = useHistory()
   const logout = () => {
       
    axios.get('http://localhost:5000/logout', {withCredentials: true}).then(()=>{
        localStorage.removeItem('user')
        history.push("/")
    })
   }
    return <div className='main-app-container'>
        <span>Work in progress</span>
         <div className='main-app-gif'>
        </div>
        <button onClick={logout}>Logout</button>
        </div>
}
export default Lollipop