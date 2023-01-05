import { lazy, Suspense, useState, useEffect } from "react"
import Loading from "./Loading"

const About = () => {

    const [photo, setPhoto] = useState(null)
    useEffect(() => {
      import('../assets/cat.jpg')
      .then(img => setPhoto(img.default))
      console.log('photo uploaded: ' + photo)
    }, [photo]);

    
    const style = {
      container:'py-12 px-4 sm:px-10 flex flex-col justify-evenly items-center relative overflow-hidden animate-fadein-fast',
      box:'flex flex-col md:flex-row justify-evenly gap-y-10 items-center',
      photo:'w-80 h-80 p-4 rounded ring-1 ring-title shadow-xl',
      content:'text-right flex flex-col gap-y-4 w-full md:w-1/3 animate-fadein-slow' 
    }
    return(

        <div className={style.container}>
          <h1 className='text-7xl py-10'>
            About Me
          </h1>
          <div className={style.box}>
              <div className={style.photo}>
                {photo && 
                <img 
                src={photo} 
                loading="lazy"
                alt="portrait photo" 
                className="object-cover h-full w-full"/>}
              </div>
            <div className={style.content}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime non dolorum, numquam iusto esse. Doloremque minima placeat odit incidunt in! Iusto voluptatibus possimus, hic excepturi ea minus repellat dolorem.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est accusantium dicta non. Magnam inventore aspernatur officia maiores blanditiis deleniti voluptatem doloribus, architecto, libero, beatae voluptatibus quibusdam aperiam facere in minima?</p>
            </div>
          </div>
        </div>

    )
}

export default About