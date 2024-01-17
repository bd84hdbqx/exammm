import React from 'react'
import "../../style/reset.scss"
import { useSelector, useDispatch } from 'react-redux'


import Section1 from '../section1'
import Section2 from '../section2'
import Section3 from '../section3'

function Main() {
  const food = useSelector((state) => state.foods.food)
  const dispatch = useDispatch()

  return (
    <>
    <main >
        <Section1/>
        <Section2/>
        <Section3/>
    </main>
    </>
  )
}

export default Main