import photo from "../assets/cat.jpg"


const About = () => {

    return(

        <div className='py-12 px-4 sm:px-10 flex flex-col justify-evenly items-center relative overflow-hidden'>
          {/* Stripes */}
          <div className="w-full absolute -top-36 md:-top-72 -right-36 md:-right-72 flex flex-col">
            <hr className="w-full h-2 bg-title drop-shadow-lg rotate-[40deg] my-1"/>
            <hr className="w-full h-4 bg-title drop-shadow-lg rotate-[40deg] my-2"/>
            <hr className="w-full h-8 bg-title drop-shadow-lg rotate-[40deg] my-3"/>
            <hr className="w-full h-16 bg-title drop-shadow-lg rotate-[40deg] my-4"/>
          </div>

          {/* Main */}
          <h1 className='text-7xl py-10'>About</h1>
          <div className="flex flex-col md:flex-row justify-evenly gap-y-10 items-center">
            <img src={photo} alt="portrait photo" className=" w-80 h-80 p-4 rounded ring-1 ring-title shadow-xl object-cover"/>
            <div className='text-right flex flex-col gap-y-4 w-full md:w-1/3'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime non dolorum, numquam iusto esse. Doloremque minima placeat odit incidunt in! Iusto voluptatibus possimus, hic excepturi ea minus repellat dolorem.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est accusantium dicta non. Magnam inventore aspernatur officia maiores blanditiis deleniti voluptatem doloribus, architecto, libero, beatae voluptatibus quibusdam aperiam facere in minima?</p>
            </div>
          </div>
        </div>

    )
}

export default About