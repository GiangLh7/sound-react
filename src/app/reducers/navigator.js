import * as types from '../constants/ActionTypes';
const initialRoute = { path: ['song'], query: 'house' };
const initialState = {
  route: initialRoute
};


export default function navigator(state = initialState, action) {
  switch (action) {
    case types.CHANGE_PATH:
      return Object.assign({}, state, {
        route: action.route
      })
    default:
      return state;
  }
}