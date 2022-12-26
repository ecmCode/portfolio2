import {About, WelcomePage, Project, Title, Skill, Footer, BlogPost} from './components'

function Home() {

  return (
    <>
        <WelcomePage />
        <About />
        <Title>Skill</Title>
        <Skill />
        <Title>Project</Title>
        <Project />
        <Title>Blog</Title>
        <BlogPost/>
        <Footer />
    </>
  )
}

export default Home
