import {About, WelcomePage, Project, Title, Skill, Footer, BlogPost, Header} from '../components'

function Home() {

  return (
    <>
      <Header />
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
