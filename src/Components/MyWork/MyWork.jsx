import React from 'react'
import './MyWork.css'
import sss from '../../assets/sss.jpg'
import mywork_data from '../../assets/mywork_data'
import ar from '../../assets/ar.jpg'
const MyWork = () => {
  return (
    <div id="work" className="mywork">
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={sss} alt="" />
        </div>
        <div className="mywork-container">
            {
                mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img }alt=""/>
                })
            }
            </div>
            <div className="mywork-showmore">
                <p>Show more</p>
                <img src={ar} alt="" />
            </div>

    </div>
  )
}

export default MyWork