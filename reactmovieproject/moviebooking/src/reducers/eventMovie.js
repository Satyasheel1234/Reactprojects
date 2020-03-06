export default function(state={}, action){
    switch(action.type){
        case 'GET_EVENT_MOVIE':
            return {...state,EventmovieDetails: action.payload};
            default:
                return state 
    }
}