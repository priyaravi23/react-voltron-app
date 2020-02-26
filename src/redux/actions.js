import {STAR_FETCH, STAR_FETCH_FAILURE, STAR_FETCH_SUCCESS} from "./action-types";
import * as api from "../api/stars";

export function fetchStar() {
    return (dispatch, getState) => {
        dispatch({
            type: STAR_FETCH
        });
        const {stars: {stars}} = getState();
        console.log(stars);
        api.fetchStar().then(star => {
            if (stars.has(star.id)) {
                throw new Error('Fetched star already exists. Please try again.');
            } else {
                dispatch({
                    type: STAR_FETCH_SUCCESS,
                    data: star
                })
            }
        }).catch(err => dispatch({
            type: STAR_FETCH_FAILURE,
            data: err
        }));
    };
}