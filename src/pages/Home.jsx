import { lazy, Suspense } from 'react'

// normal loading
import { WelcomePage, Title, Footer, Header, Project} from '../components'
// lazy loading
const About = lazy(() => import('../components/About'))
const BlogPost = lazy(() => import('../components/BlogPost'))
const Skill = lazy(() => import('../components/Skill'))


function Home() {
  
  return (
    <>
      <Header />
      <WelcomePage />
      <About />
      <Title>Skills</Title>
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
