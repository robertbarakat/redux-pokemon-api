import { combineReducers } from 'redux';
import { itemsHasErrored, itemsIsLoading, items } from './reducers';

const allReducers = combineReducers({
    // IN ES6 IF KEY AND VALUE ARE THE SAME WE DO NOT HAVE TO WRITE {KEY: KEY}
    items,
    itemsHasErrored,
    itemsIsLoading
})

export default allReducers;