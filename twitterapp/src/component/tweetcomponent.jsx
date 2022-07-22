import { useSelector } from "react-redux";
import React from "react";
import './tweetcomponent.css'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import {AiOutlineRetweet} from 'react-icons/ai';


export const Tweetcomponent =()=>{
    const tweetres=useSelector(state=>state.tweets);
    console.log("Here the tweet response",tweetres)

    const renderlist =tweetres.map((singletweet,index)=>{
        const {_id,text,author,hashtags,likes,publishedDate,retweets,imageUrl}=singletweet;
        return(<div id={_id} className="tweets-content"  key={index}>
            <div className="tweetmain-container">
                <div className="tweet-icon">
                    <div>
                    <img src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" alt="" />
                    </div>
                </div>
                <div>
                <div className="tweets_header">
                            <span className="tweet_author">{author}</span>
                            <span>@{author}</span>
                            <span>{publishedDate}</span>
                        </div>
                        <div className="tweet_text">
                            <p>{text}</p>
                            {hashtags?<div>{hashtags}</div>:""}
                            {imageUrl?<img src={imageUrl} alt="" />:""}
                        </div>
                </div>
                </div>
                <div className="social_conatiner">
                            <div>likes : {likes}</div>
                            <div>retweets : {retweets}</div>
                </div>
                <div className="social-icon">
                    <BsSuitHeart/>
                    <AiOutlineRetweet/>
                </div>
            </div>)
    })


    return(<div className="main-tweets">
            <>{renderlist}</>
    </div>

    )
}