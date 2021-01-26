
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoute({component: Component, ...rest}){
    
    let user = JSON.parse(localStorage.getItem('user'));
    return <Route {...rest}
            render={
                (props)=>{
                    if(user?.id){
                        return <Component/>
                    }else{
                        return(
                            <Redirect to= "/"/>
                        )
                    }
                }
            } />
}

export default ProtectedRoute;