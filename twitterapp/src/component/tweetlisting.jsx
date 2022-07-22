import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import { settweet } from "../redux/Action/tweetcontainer";
import { useEffect } from "react";
import { Tweetcomponent } from "./tweetcomponent";

export const Tweetlisting = ()=>{
   const All_tweet = useSelector(state=>state);
   console.log(All_tweet)
   const dispatch = useDispatch();

   const fetchtweet = async ()=>{
    const response =await axios.get("https://www.mocky.io/v2/5d1ef97d310000552febe99d").catch((err)=>console.log(err));
    //console.log(response.data)
    dispatch(settweet(response.data));
   }
   useEffect(()=>{
    fetchtweet();
   },[])
   
   console.log(All_tweet)
    return (
        <div className="tweet-container-main">
             <Tweetcomponent/>
        </div>
    )
}