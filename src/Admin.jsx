import { useState } from "react"

const Admin = () => {
    const [login, setLogin] = useState(false)
    
    const user = {username:'admin', password:'admin'}
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const entries = Object.fromEntries(data);
        if (entries.username === entries.password && entries.password === user.password) {
            return setLogin(true)
        }
        return alert('wrong username or password. Please try again.')

        
    }

    return(

        <div className="flex justify-center items-center h-screen">
            <form action="POST" onSubmit={e => handleSubmit(e)}>
            {
                login?
                
                <div className="flex justify-center items-center flex-col gap-2 shadow-md p-10 rounded ring-1 ring-primary">
                    <h3>Welcome {user.username}</h3>
                    <button onClick={() => setLogin(!login)}>Back</button>
                </div>

                :

                <div className="flex justify-center items-center flex-col gap-2 shadow-md p-10 rounded ring-1 ring-primary">
                    <label htmlFor="username">username:</label>
                    <input type="text" name="username" id="username" className="text-black" required/>
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" className="text-black" required/>
                    <button type="submit" className="bg-primary w-full my-4">Login</button>
                </div>
                
                
            }
            </form>
        </div>

    )
}

export default Admin