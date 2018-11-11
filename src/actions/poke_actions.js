export const pokeHasErrored = (bool) => ({
    type: 'POKE_HAS_ERRORED',
    hasErrored: bool

})

export const pokeIsLoading = (bool) => ({
    type: 'POKE_IS_LOADING',
    isLoading: bool
})

export const pokeFetchDataSuccess = (poke) => ({
    type: 'POKE_FETCH_DATA_SUCCESS',
    poke
})

export const fetchPoke = (url) => {
    return (dispatch) => {
        dispatch(pokeIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(pokeIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((poke) => dispatch(pokeFetchDataSuccess(poke)))
            .catch(() => dispatch(pokeHasErrored(true)));
    };
}

/* METODO ALTERNATIVO DI SCRITTURA CON FUNCTIONS VECCHIO STILE 

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
*/