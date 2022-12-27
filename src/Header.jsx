import { Link } from "react-router-dom";
import { useState, useEffect} from "react"

const Header = () => {
    
    const [width,setWidth] = useState(0)
    const [hide,setHide] =useState(false)

    // Changing progress bar on scroll
    window.addEventListener('scroll', () => {
        const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
        setWidth((scrollTop / height) * 100);
    });
    
    // Hide & show Header on scroll
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos ) {
        setHide(false)
    } else {
        setHide(true)
    }
    prevScrollpos = currentScrollPos;
    }

    const links = [
        {
            name:'Home',
            route:'portfolio/',
            enabled:true
        },
        {
            name:'Projects',
            route:'portfolio/projects',
            enabled:false
        },
        {
            name:'Blog',
            route:'portfolio/blog',
            enabled:false
        },
        {
            name:'404',
            route:'portfolio/404',
            enabled:true
        },
    ]
    const style = {
        header:"transition duration-200 fixed top-0 drop-shadow-xl shadow-black w-screen z-10",
        nav:"flex flex-row justify-evenly items-center select-none py-4 text-xl sm:text-2xl bg-title text-white bg-opacity-80 backdrop-blur-sm ",
        show:"translate-y-0",
        hide:"-translate-y-16",
        btn:{
            enabled: "hover:text-secondary",
            disabled:"text-gray cursor-not-allowed"
        },
        progress:"h-2 bg-gradient-to-r from-title via-primary to-secondary"
        
    }

    
    
    
    

    return(
        <header className={`${style.header} ${hide? style.hide : style.show}`}>
            <div className={`${style.nav}`}>
                {links.map(link => {

                    return(
                        link.enabled
                        ?
                        <Link className={style.btn.enabled} to={link.route}>
                            {link.name}
                        </Link>
                        :
                        <div className={style.btn.disabled}>
                            {link.name}
                        </div>
                    )
                })}
                {/* <Link className="hover:text-secondary" to='portfolio/'>
                    Home
                </Link>

                <div className="text-gray cursor-not-allowed">
                    Projects
                </div>

                <div className="text-gray cursor-not-allowed">
                    Blog
                </div>

                <Link className="hover:text-secondary" to='portfolio/404'>
                    404
                </Link> */}
            </div>
                <div 
                id="scroll-progress"
                className={style.progress}
                style={{width: width + "%"}}></div>
        </header>
    )
};

export default Header