import { ActionType } from "../container/actionType";

const initialState ={
    tweets:[]
}

export const tweetReducer = (state=initialState,{type,payload})=>{
switch (type) {
    case ActionType.SET_TWEET:
        return {...state,tweets:payload}
    default:
        return state
}
}