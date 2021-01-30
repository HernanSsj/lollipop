import axios from 'axios'
export const getUser = () => async (dispatch) =>{
    try {
        const data = await axios.get('http://localhost:5000/user', {withCredentials: true})
        console.log(data.data)
        dispatch({ type: "FETCH_CURRENT", payload: data.data});
    } catch (error) {
        console.log(error)
    }
}
