// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export const fetchFolk = () => {
    const promise = axios.get(`https://swapi.co/api/people/`);
    return dispatch => {
        dispatch({ type: FETCHING }); // first state of 'fetching' is dispatched
        promise
        .then(response => {
            console.log(response.data)
            dispatch({ type: SUCCESS, payload: response.data.results }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FAILURE }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
};
  