import { APP } from "./actionTypes";

const initialState = {
    username: ''
}

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case APP.USERNAME:
            return { ...state, username: action.payload };
        case APP.USER_LOGOUT:
            return initialState;
    }
}