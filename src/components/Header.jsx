import { Link } from "react-router-dom";
import { useState, useEffect} from "react"
import { baseURL } from "../../routeConfig";

const Header = () => {
    
    const [width, setWidth] = useState(0)
    const [hide, setHide] = useState(false)

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
            route:'',
            enabled:true
        },
        {
            name:'Projects',
            route:'projects',
            enabled:false
        },
        {
            name:'Blog',
            route:'blog',
            enabled:false
        },
        // {
        //     name:'404',
        //     route:'404',
        //     enabled:true
        // },
        // {
        //     name:'admin',
        //     route:'admin',
        //     enabled:true
        // },
    ]

    const style = {
        header:"w-full transition duration-200 fixed top-0 drop-shadow-xl shadow-black z-10",
        nav:"flex flex-row justify-evenly items-center select-none py-4 text-xl sm:text-2xl bg-title/80 text-white",
        show:"translate-y-0",
        hide:"-translate-y-16",
        btn:{
            enabled: "hover:text-secondary",
            disabled:"text-gray pointer-events-none"
        },
        progress:"h-2 bg-gradient-to-r from-title via-primary to-secondary relative"
    }

    
    
    
    

    return(
        <header className={`
            ${style.header} 
            ${hide? style.hide : style.show}
        `}>
            <div className={style.nav}>
                {links.map(link => {

                    return(
                        <Link 
                        className={
                            link.enabled 
                            ? style.btn.enabled
                            : style.btn.disabled
                        } 
                        to={link.enabled && baseURL + link.route}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
                <div 
                id="scroll-progress"
                className={style.progress}
                style={{width: width + "%"}}></div>
        </header>
    )
};

export default Header