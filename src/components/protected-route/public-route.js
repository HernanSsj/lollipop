
import {Route, Redirect} from 'react-router-dom'
import Navbar from '../navbar/navbar'

function PublicRoute({component: Component, ...rest}){
    
    let user = JSON.parse(localStorage.getItem('user'));

    return <Route {...rest}
            render={
                (props)=>{
                    if(!user?.id){
                        return <><Navbar/><Component/> </>
                    }

                    return(
                            <Redirect to="/app"/>
                        )
                    
                }
            } />
}

export default PublicRoute;