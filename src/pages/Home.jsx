import { lazy, Suspense } from 'react'

// normal loading
import { WelcomePage, Title, Footer, Header, Skill, Loading} from '../components'
// lazy loading
const About = lazy(() => import('../components/About'))
const BlogPost = lazy(() => import('../components/BlogPost'))
const Project = lazy(() => import('../components/Project'))


function Home() {
  
  return (
    <>
      <Header />
      <WelcomePage />
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Title>Skills</Title>
      <Skill />
      <Title>Project</Title>
      <Suspense fallback={<Loading />}>
        <Project />
      </Suspense>
      <Title>Blog</Title>
      <Suspense fallback={<Loading />}>
        <BlogPost/>
      </Suspense>
      <Footer />
    </>
  )
}

export default Home
