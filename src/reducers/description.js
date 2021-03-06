
const initialDescriptionState = {
    show: false,
    info: null,
    selected: null,
    getting_servers: false

}
const descriptionReducer = (state=initialDescriptionState, action) =>{
    switch(action.type){
        case "TOGGLE_SHOW":
            return {
                ...state, show: !state.show
            };
        case "ADD_INFO":
                return {
                    ...state, 
                    info: action.payload
                };
        case "TOGGLE_GETTING_SERVERS":
            return{
                ...state, getting_servers: !state.getting_servers
            }
        case "CLEAR_INFO":
            return{
                ...state, info: null
            }
        default:
            return state;
    }
}

export default descriptionReducer