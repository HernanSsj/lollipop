
const initialPlayerState = {
    playing: false,
    title: null,
    episode: null,
    servers: null,
    selected: 0
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
                    servers: action.payload,
                    selected: 0
                    };        
        case "ADD_TITLE":
            return {
                ...state, title: action.payload
            };
        case "ADD_EPISODE":
            return {
                ...state, episode: action.payload
            };
        case "SET_SELECTED":
                return {
                    ...state, selected: action.payload
                };
        default:
            return state;
    }
}

export default playerReducer