import { combineReducers  } from 'redux';
import player from '../reducers/player';


const rootReducer = combineReducers ( { player } );

export default rootReducer;