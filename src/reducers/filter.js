import { SET_FILTER, setFilter } from '../actions';

function reducer(state = 'ALL', action) {
  switch (action) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default reducer;
