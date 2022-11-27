
const WelcomePage = () => {

    return(

        <div className='p-10 h-screen bg-primary flex flex-col gap-10 justify-center items-center text-white drop-shadow-xl select-none overflow-hidden'>

          {/* Background Balls */}
          <div className="transition duration-500 transform absolute -bottom-60 -left-60 h-[42rem] w-[42rem] md:scale-150 bg-gradient-to-t from-black to-primary rounded-full shadow-xl -z-10 animate-fadein-fast"/>
          <div className="transition duration-500 transform absolute -top-60 -right-60 md:-translate-x-32 md:translate-y-32 h-[25rem] w-[25rem] bg-gradient-to-b from-secondary to-primary rounded-full shadow-lg -z-10 animate-fadein-fast"/>

          {/* Page Title */}
          <div className="flex flex-col justify-center items-center gap-4 animate-fadein-fast">
            <h1 className="drop-shadow-lg">Hello World</h1>
            <h3 className="py-4">My Personal Portfolio.</h3>
            <p className='text-right flex flex-col w-full md:w-2/3 animate-fadein-slow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime non dolorum, numquam iusto esse. Doloremque minima placeat odit incidunt in! Iusto voluptatibus possimus, hic excepturi ea minus repellat dolorem.</p>
          </div>

          {/* Bar & Button */}
          <div className="w-full flex justify-evenly items-center animate-fadein-slow">
            <p className="px-4 md:px-32 py-4 bg-secondary bg-opacity-30 shadow-md rounded transition animate-bounce">
              <i class="fa-solid fa-angles-down mr-4"></i> 
              Scroll to continue
            </p>
            <a href='#footer'>
              <button className="px-20">Contact Me</button>
            </a>
          </div>

        </div>

    )
}

export default WelcomePage