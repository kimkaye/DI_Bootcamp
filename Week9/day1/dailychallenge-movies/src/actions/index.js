
export const selectMovieAction = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}