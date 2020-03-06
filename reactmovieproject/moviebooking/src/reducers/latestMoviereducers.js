export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST_MOVIE':
            return {...state,latest: action.payload};
            default:
                return state 
    }
}
// const reducer = (state = {}, action) => {
//     switch (action.type) {
//       case "FETCH_REQUEST":
//         return state;
//       case "FETCH_SUCCESS": 
//         return {...state, posts: action.payload};
//       default:
//         return state;
//     }
//   } 
// export default function (state = null, action) {
//     switch (action.type) {
//       case "GET_LATEST_MOVIE":
//         return state;
//       case "GET_LATEST_MOVIE": 
//         return {...state, latest: action.payload};
//       default:
//         return state;
//     }
//   } 

//   export default function(state=null,action){
//     switch(action.type){
//         case 'GET_LATEST_MOVIE':
//             return{...state,Movies:action.payload}
//         default:
//             return state
//     }
// }