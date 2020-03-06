export function LatestMovieList(){
    //const output = fetch(`http://3.134.99.170:4000/latest`,{method:'GET'})
    const output = fetch(`http://localhost:3000/latest`,{method:'GET'})
    .then(data => data.json())

    return{
        type:'GET_LATEST_MOVIE',
        payload:output
    }
}

export function UpcomingMovieList(){
   // const output = fetch('http://3.134.99.170:4000/upcomingMovies',{method:'GET'})
    const output = fetch(`http://localhost:8900/upcoming`,{method:'GET'})
    .then(data =>data.json())

    return{
        type:'GET_LATEST_UPCOMING_MOVIE',
        payload:output
    }
}

export function EventMovie(){
    //const output = fetch('http://3.134.99.170:4000/events',{method:'GET'})
    const output = fetch('http://localhost:8901/event',{method:'GET'})
    .then(data =>data.json())

    return{
        type:'GET_EVENT_MOVIE',
        payload:output
    }
}

// export function LatestMovieList(){
//     return{
//         type:'GET_LATEST_MOVIE',
//         payload:[
//             {
//               "_id": "5ab12612f36d2879268f284a",
//               "name": "Black Panther",
//               "language": "ENGLISH",
//               "rate": 4.5,
//               "type": "Action Adventure Fantasy",
//               "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
//             },
//             {
//               "_id": "5ab12666f36d2879268f2902",
//               "name": "Death Wish",
//               "language": "ENGLISH",
//               "type": "Action Crime Thriller",
//               "rate": 3.2,
//               "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
//             },
//             {
//               "_id": "5ab12678f36d2879268f291d",
//               "name": "Coco",
//               "language": "ENGLISH",
//               "type": "Adventure Animation Family",
//               "rate": 5,
//               "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
//             }
//           ]
//     }
// }