import {FETCHING,SUCCESS,FAILURE} from "../actions";

const initialState = {
  characters: [],
  fetchingPeople: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, { fetchingPeople: true });
    case SUCCESS:
      return Object.assign({}, state, {
        characters: [...state.characters, ...action.payload], // if our promise was successful
        fetchingPeople: false // also, set our boolean to false, because we're no longer fetching
      });
    case FAILURE:
      return Object.assign({}, state, {
        fetchingPeople: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching folks" // now we're getting an error back, set the error as we'd see fit
      });
    default:
      return state;
  }
};
