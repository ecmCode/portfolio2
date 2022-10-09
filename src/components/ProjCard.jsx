import {LikeButton, ShareButton} from "./Button";
import "./ProjCard.css"
export function ProjCard(props){
    return(
        <div className="ProjCard">
            <div className="p-box">
                <div className="p-title">{props.title}</div>
                <div className="p-digest">{props.children}</div>
                <div className="p-date" >{props.date}</div>
                <div className="p-btns">
                    <LikeButton />
                    <ShareButton />
                </div>
            </div>
        </div>
        
    )
};