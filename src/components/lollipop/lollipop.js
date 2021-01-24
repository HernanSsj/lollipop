
import axios from 'axios'
import './lollipop-style.css'
const Lollipop =  ()=>{
   const logout = () => axios.get('http://localhost:5000/logout', {withCredentials: true})
    return <div className='main-app-container'>
        <span>Work in progress</span>
         <div className='main-app-gif'>
        </div>
        <button onClick={logout}></button>
        </div>
}
export default Lollipop