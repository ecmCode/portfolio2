import {useState} from "react";


const ContactForm = () => {
    
    const [count,setCount] = useState(1)
    const [users,setUsers] = useState([])
    const [submit,setSubmit] = useState(false)
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true)
        const data = new FormData(e.target)
        const entries = Object.fromEntries(data)
        const keys = Object.keys(entries)
        Object.assign(entries, {id: count});
        setCount(count + 1)
        keys.map(key => entries[key] = entries[key].trim())
        setUsers((user) => [...user,entries])
        // const keys =  Object.keys(entries)
        // const list = keys.map(key =>`${key} : ${entries[key]}`)
        // const values =  Object.values(entries)
        // const {name,email,comment} = Object.fromEntries(data)
        // console.log({name,email});
        // console.log(name,email,comment);
        // for (let index = 0; index < list.length; index++) {
        //     const element = list[index];
        //     console.log(element);
        // }
            
    }

    return(
        
            <form onSubmit={e => handleSubmit(e)} className="p-10 bg-primary bg-opacity-40 rounded shadow-xl h-auto">
                {

                submit?
                <div className="flex flex-col gap-6 justify-center items-center py-6 animate-fadein-slow">
                    <h4 className="p-2">Thank you for your comment! We will message you back as soon as possible.</h4>
                    <button onClick={() => setSubmit(false)}>Back</button>
                </div>
                
                :
                
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col lg:flex-row gap-4 animate-fadein-slow">
                        <div className="flex w-full lg:w-1/2 gap-4 items-baseline">
                            <label htmlFor="name">Name</label> 
                            <input name="name" id="name" type="text" required/>
                        </div>
                        <div className="flex w-full lg:w-1/2 gap-4 items-baseline">
                            <label htmlFor="email">Email</label>
                            <input name="email" id="email" type="email" required/>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col animate-fadein-slow">
                        <label htmlFor="comment">Comment</label>
                        <textarea name="comment" id="comment"  rows="7" />
                    </div>
                    <button type="submit" className="bg-secondary animate-fadein-slow">Submit</button>
                </div>
                }
            </form>
    )
}


const Footer = () => {

    return(
        <div id="contact" className="flex flex-col md:flex-row justify-evenly items-center bg-gradient-to-tl from-primary to-secondary text-white py-12 px-8 shadow-xl">
            
            <div className="w-full md:w-2/5 flex flex-col justify-center gap-4 items-center">
                <h1 className="text-6xl py-2">Contact Me</h1>
                <ContactForm/>
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