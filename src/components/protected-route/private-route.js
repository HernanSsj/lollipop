import {Route, Redirect} from 'react-router-dom'
import { useSelector } from "react-redux";


function PrivateRoute({component: Component, ...rest}){
  
    const user = useSelector((state)=>state.user)
  
    return <Route {...rest}
            render={
                (props)=>{
                    if(user){
                        return <Component logged={user}/>
                    }else{
                        return(
                            <Redirect to= "/"/>
                        )
                       
                        
                    }
                }
            } />
}

export default PrivateRoute;