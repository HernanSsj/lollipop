import {Route, Redirect} from 'react-router-dom'
import { useSelector } from "react-redux";


function PrivateRoute({component: Component, ...rest}){
  
    const user = useSelector((state)=>state.user)
    console.log(user)
    console.log("Entered private route")
    return <Route {...rest}
            render={
                (props)=>{
                    if(user){
                        return <Component/>
                    }else{
                        return(
                            <Redirect to= "/"/>
                        )
                       
                        
                    }
                }
            } />
}

export default PrivateRoute;