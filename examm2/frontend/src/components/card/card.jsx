import React from 'react'
import "./card.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux'
import { addWishlist } from '../../redux/slices/wishlistSlice';

function Card({elem}) {
  const wishlist = useSelector((state) => state.wishlists.wishlist)

  const dispatch = useDispatch()
  return (
   <>
   <div className="card">
    <div className="cardName">
        {elem.name}
    </div>
    <div className="cardDetail">
        <div className="cardIn">with wild mushrooms and asparagus</div>
        <div className="cardS" >..................</div>
        <div className="cardP">$9.00</div>
       <FavoriteBorderIcon fontSize="large" style={{cursor:"pointer"}} onClick={()=>{
          dispatch(addWishlist({...elem,quantity:1}))
        }} />
       
    </div>
   </div>
   </>
  )
}

export default Card