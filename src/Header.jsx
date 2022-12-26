import { Link } from "react-router-dom";


export default function Header() {
    
    return(
        <header className="fixed top-0 drop-shadow-xl shadow-black flex flex-row justify-evenly items-center select-none py-4  text-xl sm:text-2xl w-screen bg-title text-white bg-opacity-80 backdrop-blur-sm z-10 ">
            <Link className="hover:text-secondary" to='portfolio/'>
                Home
            </Link>

            <div className="text-gray cursor-not-allowed">
                Projects
            </div>

            <div className="text-gray cursor-not-allowed">
                Blog
            </div>

        </header>
    )
};
