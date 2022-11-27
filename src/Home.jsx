import {About, WelcomePage, Project, Title, Skill, Footer, BlogPost} from './components'

function Home() {

  return (
    <div className="w-full h-full">
      <div id="container" className='h-full bg-white overflow-y-scroll scroll-smooth text-black'>
        <WelcomePage />
        <About />
        <Title>Skill</Title>
        <Skill />
        <Title>Project</Title>
        <Project />
        {/* <Title>Feedback</Title> */}
        <Title>Blog</Title>
        <BlogPost/>
        <Footer />
      </div>
    </div>
  )
}

export default Home
