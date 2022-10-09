import './Home.css'
import './Projects.css'

import { ProjCard } from "./components/ProjCard"

function Projects() {

  return (
    <div className="Home">
      
      <h1>Projects</h1>
      <div>
        Languages and frameworks I use for my projects:
        <div className='lang-icons'>

            <div className='icon'>
              <i className="fa-brands fa-html5"></i>
              <div className='icon-tag'>HTML5</div>
            </div>

            <div className='icon'>
              <i className="fa-brands fa-css3-alt"></i>
              <div className='icon-tag'>CSS3</div>
            </div>

            <div className='icon'>
              <i className="fa-brands fa-square-js"></i>
              <div className='icon-tag'>Javascript</div>
            </div>

            <div className='icon'>
              <i className="fa-brands fa-python"></i>
              <div className='icon-tag'>Python</div>
            </div>

            <div className='icon'>
              <i className="fa-brands fa-react"></i>
              <div className='icon-tag'>React</div>
            </div>

            <div className='icon'>
              <i className="fa-brands fa-node"></i>
              <div className='icon-tag'>Node.js</div>
            </div>

            <div className='icon'>
              <i className="fa-solid fa-database"></i>
              <div className='icon-tag'>SQL</div>
            </div>

        </div>
      </div>
      
      <div >
      <div>These are the web development projects I have done: </div>
      </div>
      
      <div className="p-container">
        <ProjCard title="Hello World">First Project</ProjCard>
        <ProjCard title="Test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum a earum molestias veritatis necessitatibus mollitia? Quis tempore, labore velit recusandae inventore porro fuga quae cum magnam, illum distinctio vitae.</ProjCard>
        <ProjCard title="Test">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur asperiores ea autem eaque fuga cupiditate error nulla commodi nam numquam voluptatibus unde consequatur at, assumenda harum! Ad ipsam aliquid voluptates.</ProjCard>
        <ProjCard title="Test">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente voluptatum. Inventore, qui? Quaerat, nostrum! Repudiandae perferendis in natus, quaerat quas nobis fuga hic corrupti illum tempora quis, nam commodi!</ProjCard>
      </div>
      
    </div>
  )
}

export default Projects
