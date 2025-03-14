import React from 'react'
import './Services.css'
import sss from '../../assets/sss.jpg'
import ar from '../../assets/ar.jpg'
import services_data from '../../assets/services_data.js'
const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={sss} alt="" />
        </div>
        <div className="services-container">
            {services_data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                        {/* <p>Read more</p> */}
                        {/* <img src={ar} alt="" /> */}
                        </div>
                    </div>
                    
            })} 
        </div>
    </div>
  )
}

export default Services