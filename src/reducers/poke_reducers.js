export const pokeHasErrored = (state = false, action) => {
    switch(action.type){
        case 'POKE_HAS_ERRORED' : return action.hasErrored;
        default : return state
    }
}

export const pokeIsLoading = (state = false, action) => {
    switch(action.type){
        case 'POKE_IS_LOADING' : return action.isLoading;
        default : return state
    }
}

export const poke = (state = [], action) => {
    switch(action.type){
        case 'POKE_FETCH_DATA_SUCCESS' : return action.poke;
        default : return state
    }
}