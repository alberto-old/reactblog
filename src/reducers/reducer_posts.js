import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index';

// 'all' represents the list of posts and 'post' is the active post
const INITIAL_STATE = {
  all: [],
  post: null
};

export default function (state = INITIAL_STATE, action) {
  switch ( action.type ) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}
