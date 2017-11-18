import { FETCH_GIT_VIEWER } from '../actions/types';

export default function gitViewer(state = null, action) {
  switch (action.type) {
    case FETCH_GIT_VIEWER:
      return action.payload;
    default:
      return state;
  }
}
