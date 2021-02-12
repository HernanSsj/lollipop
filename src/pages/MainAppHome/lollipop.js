
import axios from 'axios'
import './lollipop-style.css'
import { useHistory } from "react-router"
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../actions/users'
import Navbar from '../../components/navbar2/navbar'
import ItemCarrousel from '../../components/carrousel/Carrousel'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { useEffect, useState } from 'react'
const Lollipop =  (props)=>{

    const dispatch = useDispatch()
    let history = useHistory()
    const [episodes, setEpisodes] = useState({})
    const [loading, setLoading] = useState(true)
   useEffect(()=>{
    async function fetchData() {
        const response = await axios.get("https://aruppi-api.herokuapp.com/api/v3/lastEpisodes")
       setEpisodes(response.data)
          
      
       setTimeout(() => {
               setLoading(false)
            }, 1000);
    }
     
        fetchData()
     
        },[])
   const logout = () => {
       
    axios.get('http://localhost:5000/auth/logout', {withCredentials: true}).then(()=>{
        
        dispatch(deleteUser())

        // history.push("/")
    })
    .catch(()=>dispatch(deleteUser()))
   }

    return <div className='main-app-container'>
        <Navbar/>
        {loading ?  <Loader type="Rings" color="#84cdfa"height={81} width={81}/>: <div className="carousel-container"><ItemCarrousel episodes={episodes}/></div> }
        
        {/* <button className={"logout-button"} onClick={logout}>Logout</button> */}
        </div>
}
export default Lollipop