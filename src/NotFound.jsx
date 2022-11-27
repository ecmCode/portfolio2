import {Link} from 'react-router-dom'

function NotFound() {
    
    return(
        <div className='w-screen h-screen flex flex-col gap-10 justify-center items-center bg-gradient-to-tr from-primary to-secondary text-white'>
            <h1 className='animate-pulse'>404 Not Found.</h1> 
            <h3 className='px-6 text-center'>Oops, seems like you are getting lost!</h3>
            <Link to='/'>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default NotFound