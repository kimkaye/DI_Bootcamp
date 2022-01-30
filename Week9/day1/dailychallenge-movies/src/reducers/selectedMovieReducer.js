
let initState = {
}


export default function selectedMovieReducer(state= initState, action={}) {
    console.log(action)
    switch (action.type){
        case 'MOVIE_SELECTED':
            return {...action.payload}
        default:
            return {...state}
    }
}