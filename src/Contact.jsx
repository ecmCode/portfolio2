import './Home.css'
// import './Contact.css'
// import {useState} from "react";

// A contact page consists of google map with location pin, email sending function and social media links

function Contact() {
  
  const boxStyle = {
    display:'flex', 
    justifyContent:'space-around',
    opacity: '0.7',
    width: '85%',
  }

  const iconStyle = {
    display:'flex',
    flexDirection:'column'
  }

  return (
    <div className="Home">
      
      <h1>Contact</h1>
      <div className='map'>

      </div>
      <div className='sendmail'>
        
      </div>
      <p className="read-the-docs">
        This is how Contact page should look like
      </p>
      
      <div className="sm-icons" style={boxStyle}>

        <div className="icon" style={iconStyle}><i class="fa-brands fa-github fa-4x"/>
        Github
        </div>
        
        <div className="icon" style={iconStyle}><i class="fa-brands fa-instagram fa-4x" />
        Instagram
        </div>
        
        <div className="icon" style={iconStyle}><i class="fa-brands fa-youtube fa-4x" />
        Youtube
        </div>
        
        <div className="icon" style={iconStyle}><i class="fa-brands fa-facebook fa-4x" />
        Facebook
        </div>

      </div>
      
    </div>
  )
}

export default Contact