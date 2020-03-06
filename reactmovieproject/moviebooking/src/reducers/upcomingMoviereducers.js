export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST_UPCOMING_MOVIE':
            return {...state,upcoming: action.payload};
            default:
                return state 
    }
}