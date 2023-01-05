import {useState, lazy, Suspense} from "react";
import Loading from "./Loading";

const ContactForm = lazy(() => import('./ContactForm'))

const Footer = () => {

    return(
        <div id="contact" className="flex flex-col md:flex-row justify-evenly items-center bg-gradient-to-tl from-primary to-secondary text-white py-12 px-8 shadow-xl">
            
            <div className="w-full md:w-2/5 flex flex-col justify-center gap-4 items-center">
                <h1 className="text-6xl py-2">Contact Me</h1>
                <Suspense fallback={<Loading />}>
                    <ContactForm/>
                </Suspense>
            </div>
        
            <div className="flex flex-col items-end gap-10 m-10">
    
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23704002.510822084!2d-70.01390205864136!3d21.303065452748353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen-US!2smx!4v1669435444432!5m2!1sen-US!2smx" width="400" height="300" className="border-2 border-primary p-4 hidden lg:block" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className="w-full gap-y-4 flex flex-col lg:flex-row justify-between items-center">
                    <div className="grid grid-cols-4 lg:grid-cols-2 text-4xl gap-6">
                        <i className="fa-brands fa-github"/>
                        <i className="fa-brands fa-instagram" />
                        <i className="fa-brands fa-youtube" />
                        <i className="fa-brands fa-facebook" />
                    </div>
                
                    <div>
                        <p className="text-right"><i className="fa-solid fa-envelope text-xl px-4"></i> usermail@mail.com</p>
                        <p className="text-right"><i className="fa-solid fa-phone text-xl px-4"></i>  +0 123 4567 890</p>
                        <p className="text-right italic"> 
                            Some Road, Some City 12345,<br/>
                            Somewhere in the Earth   
                        </p>
                    </div>
                </div>
            </div>
        </div> 
        
    )

}

export default Footer