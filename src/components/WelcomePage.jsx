
const WelcomePage = () => {
    
    const style = {
      body:`
      ${/* Base */''} p-6 sm:p-10 select-none overflow-hidden
      ${/* Shape */''} min-h-screen bg-primary text-white drop-shadow-xl
      ${/* Position */''} relative
      ${/* Flex */''} flex flex-col justify-center items-center 
      ${/* 640px */''}
      ${/* 768px */''}
      ${/* 1024px */''}
      ${/* 1280px */''}`,
      balls:{
        base:  
       `${/* Transition */''} transition duration-500 
        ${/* Position */''} absolute -z-10 
        ${/* Shape */''} rounded-full shadow-lg animate-fadein-fast `,
        left:
       `${/* Position */''} -bottom-60 -left-60
        ${/* Shape */''} h-[42rem] w-[42rem] bg-gradient-to-t from-black to-primary
        ${/* Transition */''} md:scale-150 `,
        right:
       `${/* Position */''} -top-40 -right-60
        ${/* Shape */''} h-[28rem] w-[28rem] bg-gradient-to-b from-secondary to-primary
        ${/* Transition */''} md:-translate-x-32 md:translate-y-32 `,
      },
      title:{
        box: "w-full sm:w-3/4 md:w-1/2 my-4 sm:my-10 flex flex-col justify-center items-center gap-4 md:gap-10 animate-fadein-fast",
        h1: "text-5xl sm:text-7xl text-center pt-10 sm:pt-0",
        h3: "text-2xl sm:text-4xl text-center",
        p: "text-left"
      },
      btns:{
        box:` 
        ${/* Base */''} w-full px-4
        ${/* Flex */''} flex justify-evenly items-stretch sm:items-center flex-col sm:flex-row
        ${/* Animation */''} animate-fadein-slow`,
        scroll:"px-0 sm:px-4 md:px-32 py-2 sm:py-4 bg-none sm:bg-secondary/30 shadow-none sm:shadow-md rounded transition duration-200 animate-none sm:animate-bounce text-right sm:text-center",
        contact:""
      }

    }
    
    return(

        <div className={style.body}>

          {/*  Background Balls  */}
          <div className={`${style.balls.base} ${style.balls.left}`}/>
          <div className={`${style.balls.base} ${style.balls.right}`}/>

          {/*  Page Title  */}
          <div className={style.title.box}>
            <h1 className={style.title.h1}>Hello World</h1>
            <h3 className={style.title.h3}>My Personal Portfolio.</h3>
            <p className={style.title.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime non dolorum, numquam iusto esse. Doloremque minima placeat odit incidunt in! Iusto voluptatibus possimus, hic excepturi ea minus repellat dolorem.</p>
          </div>

          {/*  Buttons  */}
          <div className={style.btns.box}>
            <p className={style.btns.scroll}>
              <i className="fa-solid fa-angles-down mr-4"></i> 
              Scroll to continue
            </p>
            <a href='#contact'>
              <button className={style.btns.contact}>Contact Me</button>
            </a>
          </div>

        </div>

    )
}

export default WelcomePage