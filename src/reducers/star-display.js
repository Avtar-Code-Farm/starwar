import { SHOW_STAR_DISPLAY, HIDE_STAR_DISPLAY } from '../action/star-display';

const initialState = {
    isShown: false,
    star: null,
}

export default function (state, action) {
    console.log("Star display reducer " + JSON.stringify(action));

    if(state === undefined) {
        return initialState;
    }

    switch(action.type) {
        case SHOW_STAR_DISPLAY:
            console.log("reducer: SHOW_STAR_DISPLAY");
            return {
                ...state,
                isShown: true,
                star: action.star,
            };
        case HIDE_STAR_DISPLAY:
            console.log("reducer: HIDE_STAR_DISPLAY");
            return {
                ...state,
                isShown: false,
                star: null,
            };
        default:
            return state;
    }

}