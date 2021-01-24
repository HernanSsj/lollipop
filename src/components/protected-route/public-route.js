import { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import { myContext } from '../context/context'
    
function PublicRoute({component: Component, ...rest}){
    const ctx = useContext(myContext)
    return <Route {...rest}
            render={
                (props)=>{
                    if(!ctx){
                        return <><Navbar/><Component/> </>
                    }

                    return(
                            <Redirect to="/app"/>
                        )
                    
                }
            } />
}

export default PublicRoute;