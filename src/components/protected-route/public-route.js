
import {Route, Redirect} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import { useSelector } from "react-redux";

function PublicRoute({component: Component, ...rest}){
    
    const user = useSelector((state)=>state.user)
    console.log("Entered public route")
    return <Route {...rest}
            render={
                (props)=>{
                    if(user){
                        return(
                            <Redirect to="/app"/>
                        )
                    
                    }
                    return <><Navbar/><Component/> </>
                    
                }
            } />
}

export default PublicRoute;