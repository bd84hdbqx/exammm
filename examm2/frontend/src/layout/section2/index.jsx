import React from 'react'
import "./section2.scss"
import image3 from "../../assets/image3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream } from '@fortawesome/free-solid-svg-icons'
import "../../style/reset.scss"

function Section2() {
  return (
    <>
    <section  className='section2'>
        {/* <img src={image3} alt="" style={{width:"100%"}} /> */}
        <div className="container">
        <div className='testimonials'>
            <div className='iceCream' style={{display:"flex",alignItems:"center",
        justifyContent:"center"}}>
            <FontAwesomeIcon icon={faIceCream} style={{fontSize:"100px",color:"white"}}/>
            </div>
        <div className="textss">
        <div id='line1'></div>
       <h2>Testimonials</h2>
       <div id='line2'></div>
        </div>
       


        </div>

        </div>

        


    </section>
    </>
  )
}

export default Section2