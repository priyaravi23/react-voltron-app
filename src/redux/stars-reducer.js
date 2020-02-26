import {STAR_FETCH, STAR_FETCH_FAILURE, STAR_FETCH_SUCCESS} from "./action-types";
import {getState} from "./local-storage";

console.log(getState());

const DEFAULT_STATE = Object.freeze({
    stars: new Map(getState() || []),
    inProgress: false,
    err: null
});

export function stars(prevState = DEFAULT_STATE, action) {
    switch (action.type) {
        case STAR_FETCH:
            return {
                ...prevState,
                inProgress: true,
                err: null
            };
        case STAR_FETCH_SUCCESS:
            return {
                stars: getStarState(prevState.stars, action.data),
                inProgress: false,
                err: null
            };
        case STAR_FETCH_FAILURE:
            return {
                ...prevState,
                inProgress: false,
                err: action.data
            };
        default:
            return prevState;
    }
}

function getStarState(stars, star) {
    return (stars.has(star.id)) ? stars :
        new Map([...stars, [star.id, star]].slice(-3))
}