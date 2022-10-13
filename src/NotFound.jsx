import {Link} from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    
    return(
            <div className="NotFound">
                <div className="nf-title">404 Not Found</div> 
                <div className='nf-des'>Oops, seems like you are getting lost!</div>
               <Link to='/'><button>Home</button></Link>
            </div>
    )
}

export default NotFound