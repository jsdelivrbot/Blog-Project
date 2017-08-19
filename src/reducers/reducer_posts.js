import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
    // const post = action.payload.data;
// const newState = {...state};//return all the posts we have already fetched
// newSate[post.id] = post;
// return newState;
// not an array, whatever on the [action.payload.data.id], make a new key here,
    // and set it's value to action.payload.data. we add the posts the user fetchs to state
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
