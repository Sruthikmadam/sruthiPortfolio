import React from 'react'
 import './About.css'
import sss from '../../assets/sss.jpg'
import sruthin from '../../assets/sruthin.jpeg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={sss} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={sruthin} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an enthusiastic and dedicated Front-End Development student with a solid foundation in HTML, CSS, and JavaScript. My passion for web development began with a desire to understand how websites are built..</p>
                    <p> I am now seeking an internship opportunity where I can apply my basic skills and continue to learn from experienced professionals.

                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill"><p>Wordpress</p><hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Happy Clients</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default About