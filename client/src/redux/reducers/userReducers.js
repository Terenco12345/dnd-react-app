import {SET_USER} from "../actions/actionTypes";

export default function user(state=null, action){
    switch(action.type){
        case SET_USER:
            state = action.user;
            return state;
        default:
            return state;
    }
}