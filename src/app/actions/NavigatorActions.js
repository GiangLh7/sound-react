
export function initNavigator() {
  
}

export function navigateBack(e) {
  return dispatch => {
    if (e.state) {
      return dispatch(navigateTo(e.state.route, false));
    }
    
    return null;
  }
}

export function navigateTo(route, shouldPushState = true) {
  return (dispatch, getState) => {
    
  }
}