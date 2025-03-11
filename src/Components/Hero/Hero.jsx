import React from 'react'
import './Hero.css'
 import srut from '../../assets/srut.jpeg'
 import AnchorLink from 'react-anchor-link-smooth-scroll'
 import Resume from '../../assets/SKMCV.pdf'
const Hero = () => {
  return (
    <div id="home" className="hero">
        <img src={srut} alt="pic" />
        <h1><span>I'm Sruthi</span>, frontend developer student in Finland</h1>
        <p>I am an enthusiastic and dedicated Front-End Development student with a solid foundation in HTML, CSS, and JavaScript. My passion for web development began with a desire to understand how websites are built.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a style={{ textDecoration: 'none' }}  href={Resume}>My resume</a></div>
        </div>
    </div>
  )
}

export default Hero