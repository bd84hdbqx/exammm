import React, { useEffect } from 'react'
import "../../style/reset.scss"
import "./section3.scss"
import Card from '../../components/card/card'
import { useSelector, useDispatch } from 'react-redux'
import { getallFoods } from '../../redux/slices/foodsSlice'

function Section3() {
  const food = useSelector((state) => state.foods.food)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getallFoods())
  },[dispatch])

  return (
    <>
    <section className='section3'>
        <div className="container" style={{display:"flex",flexWrap:"wrap",gap:"15px",justifyContent:"space-between"}}>

            {
              food && food.map((elem,id)=>{
                return  <Card key={id} elem={elem}/>
              })
            }
           

        </div>

    </section>
    </>
  )
}

export default Section3