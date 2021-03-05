
const initialPlayerState = {
    playing: false,
    title: null,
    episode: null,
    servers: null

}
const playerReducer = (state=initialPlayerState, action) =>{
    switch(action.type){
        case "TOGGLE_PLAY":
            return {
                ...state, playing: !state.playing
            };
        case "ADD_SERVERS":
                return {
                    ...state, 
                    servers: action.payload
                };
        case "CLEAR_SERVERS":
                return {
                    ...state, 
                    servers: action.payload
                    };        
        case "ADD_TITLE":
            return {
                ...state, title: action.payload
            };
        case "ADD_EPISODE":
            return {
                ...state, episode: action.payload
            };
        default:
            return state;
    }
}

export default playerReducer