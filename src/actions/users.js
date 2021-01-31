import axios from 'axios'
export const getUser = () => async (dispatch) =>{
    try {
        const data = await axios.get('http://localhost:5000/user', {withCredentials: true})
        if(data.data){
            dispatch({ type: "FETCH_CURRENT", payload: data.data.id});
        }else{
            dispatch({ type: "DELETE_CURRENT"});
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser =  () => async (dispatch) =>{
    try {
    
            dispatch({ type: "DELETE_CURRENT"});
        
        
    } catch (error) {
        console.log(error)
    }
}
