import {Link} from 'react-router-dom'

function NotFound() {
    
    return(
        <div className='w-screen h-screen overflow-hidden flex flex-col gap-10 justify-center items-center bg-gradient-to-tr from-primary to-secondary text-white relative'>
            {/* Balls */}
            <div className="transition duration-1000 transform absolute -bottom-60 -left-60 h-[45rem] w-[45rem] scale-75 md:scale-150 bg-gradient-to-r from-title to-primary rounded-full shadow-xl  animate-fadein-slow"/>
            <div className="transition duration-500 transform absolute -top-60 -right-60 md:-translate-x-32 md:translate-y-32 h-[25rem] w-[25rem] bg-gradient-to-bl from-secondary to-primary rounded-full shadow-lg animate-fadein-slow"/>
            <div className="transition duration-700 transform absolute -bottom-48 -right-60 md:-translate-x-48 md:translate-y-48 h-[30rem] w-[30rem] bg-gradient-to-l from-primary to-secondary rounded-full shadow-lg animate-fadein-fast scale-100 md:scale-150"/>
            {/* Main Article */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 z-10 mx-10 md:mx-32 lg:mx-48 animate-fadein-fast'>
                <h1 className='text-center md:text-left animate-pulse px-10 '>404 Not Found.</h1> 
                <div className='flex flex-col justify-center items-center md:items-end gap-10 animate-fadein-slow'>
                    <h3 className='text-center md:text-right'>Oops, seems like you are getting lost!</h3>
                    <Link to='../'>
                        <button className='bg-title drop-shadow-lg px-48 md:px-10 text-xl'>Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound