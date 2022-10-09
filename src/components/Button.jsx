import {useState} from "react";
import "./Button.css"

export function LikeButton(){
    const [like, setLike] = useState(false);
    const handleLike = () => {setLike(!like)}
    
    const bntText = like? "Liked" : "Like"
    const btnStyle = { backgroundColor: like? '#00d7dd7d' : '' }
    

    return(
        <div>
            <button className="btn" id="likebtn" onClick={() => handleLike()} style={btnStyle}>
            <div className="btntext">{bntText}</div>
            </button>
        </div>
    )
};

export function ShareButton(){
    const [shared, setShare] = useState(false);
    const handleShare = () => {setShare(!shared)}
    const bntText = shared? "Shared" : "Share"
    const btnStyle = { backgroundColor:shared? '#ff3d3d70' : '' }

    return(
        <div>
            <button className="btn" id="shrbtn" onClick={() => handleShare()} style={btnStyle}>
                <div className="btntext">{bntText}</div>
            </button>
        </div>
    )
};

export function FollowButton(){
    const [follow, setFollow] = useState(false);
    const handleFollow = () => {setFollow(!follow)}
    const bntText = follow? "Followed" : "Follow"
    const btnStyle = { backgroundColor: follow? '#3dff3f70' : '' }

    return(
        <div>
            <button className="btn" id="flwbtn" onClick={() => handleFollow()} style={btnStyle}>
            <div className="btntext">{bntText}</div>
            </button>
        </div>
    )
};
