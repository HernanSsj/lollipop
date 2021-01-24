import { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom'
import { myContext } from '../context/context'
function ProtectedRoute({component: Component, ...rest}){
    const ctx = useContext(myContext)
    return <Route {...rest}
            render={
                (props)=>{
                    if(ctx){
                        return <Component/>
                    }else{
                        return(
                            <Redirect to= "/login"/>
                        )
                    }
                }
            } />
}

export default ProtectedRoute;