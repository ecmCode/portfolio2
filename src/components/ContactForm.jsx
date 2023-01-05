import { useState } from 'react';

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

export default ContactForm;
