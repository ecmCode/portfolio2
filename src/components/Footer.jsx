import { lazy, Suspense } from "react";
import Loading from "./Loading";

const ContactForm = lazy(() => import('./ContactForm'))

const ContactInfo = () => {
    return(
        <div>
            <p className="text-right">
                <i className="fa-solid fa-envelope text-xl px-4"/> 
                usermail@mail.com
            </p>
            <p className="text-right">
                <i className="fa-solid fa-phone text-xl px-4"/>  
                +0 123 4567 890
            </p>
            <p className="text-right italic"> 
                Some Road, Some City 12345,<br/>
                Somewhere in the Earth   
            </p>
        </div>
    )
}

const Icon = () => {

    const icons = [
        {className:"fa-brands fa-github", url: "https://github.com/"},
        {className:"fa-brands fa-instagram", url: "https://www.instagram.com/"},
        {className:"fa-brands fa-youtube", url: "https://www.youtube.com/"},
        {className:"fa-brands fa-facebook", url: "https://www.facebook.com/"},
    ]

    return(
        <div className="grid grid-cols-4 lg:grid-cols-2 text-4xl gap-6">
           {icons.map(icon => 
                <a href={icon.url} target="_blank">
                    <i className={icon.className}/>
                </a>
            )}
        </div>
    )
}

const GoogleMap = () => {

    const src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23704002.510822084!2d-70.01390205864136!3d21.303065452748353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen-US!2smx!4v1669435444432!5m2!1sen-US!2smx" 

    return(
        <iframe 
            src={src}
            width="400" 
            height="300" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="border-2 border-primary p-4 hidden lg:block" 
        />
    )
}

const Footer = () => {

    const style = {
        footer: "flex flex-col md:flex-row justify-evenly items-center bg-gradient-to-tl from-primary to-secondary text-white py-12 px-8 shadow-xl",
        contactForm: "w-full flex flex-col justify-center gap-4 items-center",
        sidebar: "flex flex-col items-end gap-10 m-10",
        sidebarInfo: "w-full gap-y-4 flex flex-col lg:flex-row justify-between items-center",
    }

    return(
        <footer id="contact">
            <div className={style.footer}>
                <main>
                    <div className={style.contactForm}>
                        <span className="text-6xl py-2">
                            <h1>Contact Me</h1>
                        </span>
                        <Suspense fallback={<Loading />}>
                            <ContactForm/>
                        </Suspense>
                    </div>
                </main>
                <aside>
                    <div className={style.sidebar}>
                        <GoogleMap/>
                        <div className={style.sidebarInfo}>
                            <Icon/>
                            <ContactInfo/>
                        </div>
                    </div>
                </aside>
            </div> 
        </footer>
        
    )

}

export default Footer