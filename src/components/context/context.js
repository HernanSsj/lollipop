import axios from 'axios'
import React, {createContext, useEffect, useState} from 'react'
export const myContext = createContext({})

const Context = (props)=>{
    const [user, setUser] = useState({})
    useEffect(async ()=>{
        const res = await axios.get('http://localhost:5000/user', {withCredentials: true})
        setUser(res.data)
    },[])

    return(
        <myContext.Provider value={user}>{props.children}</myContext.Provider>
    )
}

export default Context