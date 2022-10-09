import {LikeButton, ShareButton, FollowButton} from "./Button";
import "./BlogCard.css";

export function BlogCard(props){
    return(
        <div className="BlogCard">
            <div className="b-box">
                <div className="b-title">{props.title}</div>
                <div className="b-digest">{props.children}</div>
                <div className="b-date" >{props.date}</div>
                <div className="b-btns">
                    <LikeButton />
                    <ShareButton />
                    <FollowButton />
                </div>
            </div>
        </div>
        
    )
};