import "./Header.css"
import { Link } from "react-router-dom";

export default function Header() {
    return(
            <div className="Header" id='h'>
                
                <div className="title">Lee's Portfolio</div> 

                <div className="nav">
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/projects'>Projects</Link>
                    <Link className="link" to='/blog'>Blog</Link>
                    <Link className="link" to='/contact'>Contact</Link>
                </div>

            </div>
    )
};
