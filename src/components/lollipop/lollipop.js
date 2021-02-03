
import axios from 'axios'
import './lollipop-style.css'
import { useHistory } from "react-router"
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../actions/users'
const Lollipop =  (props)=>{
  
    const dispatch = useDispatch()
    let history = useHistory()
   const logout = () => {
       
    axios.get('http://localhost:5000/logout', {withCredentials: true}).then(()=>{
        
        dispatch(deleteUser())

        // history.push("/")
    })
   }
    return <div className='main-app-container'>
        <span>Work in progress</span>
        <span>{props.logged}</span>
         <div className='main-app-gif'>
        </div>
        <button onClick={logout}>Logout</button>
        </div>
}
export default Lollipop