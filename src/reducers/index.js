import { combineReducers } from 'redux';
import { itemsHasErrored, itemsIsLoading, items } from './items_reducers';
import { poke, pokeHasErrored, pokeIsLoading } from './poke_reducers';

const allReducers = combineReducers({
    // IN ES6 IF KEY AND VALUE ARE THE SAME WE DO NOT HAVE TO WRITE {KEY: KEY}
    items,
    itemsHasErrored,
    itemsIsLoading,
    poke,
    pokeHasErrored,
    pokeIsLoading
})

export default allReducers;