
import axios from 'axios'
import './lollipop-style.css'
import { useHistory } from "react-router"
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../actions/users'
import Navbar from '../../components/navbar2/navbar'
const Lollipop =  (props)=>{
  
    const dispatch = useDispatch()
    let history = useHistory()
   const logout = () => {
       
    axios.get('http://localhost:5000/auth/logout', {withCredentials: true}).then(()=>{
        
        dispatch(deleteUser())

        // history.push("/")
    })
    .catch(()=>dispatch(deleteUser()))
   }
    return <div className='main-app-container'>
        <Navbar/>
        <span>Work in progress</span>
        <span>{props.logged}</span>
   
        <img width={'400px'} src={'https://media3.giphy.com/media/l0HlHJGHe3yAMhdQY/giphy.gif?cid=ecf05e47erk1n8fuxacsw62qj7aub42o6z821ofmc834tl3i&rid=giphy.gif'}></img>
        
        <button className={"logout-button"} onClick={logout}>Logout</button>
        </div>
}
export default Lollipop