import React from 'react'
import "./section1.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import sign from "../../assets/sign.png.webp"
function Section1() {
  return (
    <section className='section1'>
      <div className="container">
       <div className='details1'>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> <FontAwesomeIcon icon={faGear} style={{display:"flex",alignItems:"center",justifyContent:"center"}}/></div>
      
       <div className='welcome'>
        <div id='line1'></div>
       <h2>Welcome</h2>
       <div id='line2'></div>
       </div>
       <div className="texts">
       <div className="detail1" style={{textAlign:"center"}}>
<h3>2002</h3>
<div className='text'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</div>
       </div>
       <div className="detail2"  style={{textAlign:"center"}}><h3>2010</h3><div className='text'>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</div></div>
       <div className="detail3"  style={{textAlign:"center"}}><h3>2008</h3> <div className='text'>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
        </div></div>

       </div>
       <div style={{display:"flex",
      alignItems:"center",
      justifyContent:"center",marginTop:"20px"}}>
        <img src={sign} alt="" />
       </div>
       
       </div>
        

      </div>

    </section>
  )
}

export default Section1