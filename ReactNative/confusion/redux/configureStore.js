import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {dishes} from './dishes';
import {leaders} from './leaders';
import {comments} from './comments';
import {promotions} from './promotions';
import {favorites} from './favorite';


export const ConfigureStore=() =>{
    const store=createStore(
        combineReducers({
            dishes,
            comments,
            leaders,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger)

    );
    return store;
}