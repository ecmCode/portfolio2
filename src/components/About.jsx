import { useState, useEffect } from "react"

const About = () => {

    // Set new photo with useState hook
    const [photo, setPhoto] = useState(null)
    
    // import photo from db
    useEffect(() => {
      const unsub = () => {
        setTimeout(() => {
          import('../assets/cat.jpg')
          .then(img => setPhoto(img.default))
          console.log('photo uploaded: ' + photo)
        }, 1000);
      }
      return () => unsub()
    }, [photo]);

    // Style list for tailwind css 
    const style = {
      container:'py-12 px-4 sm:px-10 flex flex-col justify-evenly items-center relative overflow-hidden animate-fadein-fast',
      box:'flex flex-col md:flex-row justify-evenly gap-y-10 items-center',
      photoBox:'w-80 h-80 p-4 rounded ring-1 ring-title shadow-xl',
      photo:'object-cover h-full w-full animate-fadein-slow',
      content:'flex flex-col gap-y-4 w-full md:w-1/3' ,
      p:'text-left animate-fadein-slow px-4'
    }
    
    // About content in paragraph
    const content = [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime non dolorum, numquam iusto esse. Doloremque minima placeat odit incidunt in! Iusto voluptatibus possimus, hic excepturi ea minus repellat dolorem.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est accusantium dicta non. Magnam inventore aspernatur officia maiores blanditiis deleniti voluptatem doloribus, architecto, libero, beatae voluptatibus quibusdam aperiam facere in minima?"
    ]

    return(

        <div className={style.container}>
          <h1 className='text-7xl py-10'>
            About Me
          </h1>
          <div className={style.box}>
            <div className={style.photoBox}>
              {
                photo && 
                <img 
                src={photo} 
                alt="portrait photo" 
                className={style.photo}/>
              }
            </div>
            <div className={style.content}>
              {content.map((line) => 
                <p className={style.p}>{line}</p>
              )}
            </div>
          </div>
        </div>

    )
}

export default About