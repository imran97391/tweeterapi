import { ActionType } from "../container/actionType";

export const settweet = (tweet) =>{
return {
    type: ActionType.SET_TWEET,
    payload : tweet
}
}