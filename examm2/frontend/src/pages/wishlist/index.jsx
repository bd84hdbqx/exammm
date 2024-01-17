import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../../style/reset.scss"

import Card from '../../components/card/card'



function Wishlist() {
  const wishlist = useSelector((state) => state.wishlists.wishlist)
  console.log(wishlist)
  const dispatch = useDispatch()


  return (
    <>
    <div className="container">
     
    {
      wishlist && wishlist.map((elem,idx)=>{
        return  <Card key={idx} elem={elem}/>

      })
    }
   </div>
    </>
    
  )
}

export default Wishlist