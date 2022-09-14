import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { totalPrice } from '../Redux/ACTION/ActionTypes'
import { useGlobalContext } from './Context'

function CartPrice({carts}) {

    const {TotalCartPrice,total} = useGlobalContext()

    useEffect(() => {
        TotalCartPrice(carts)

    })
    
  return (
    <div className='text-center mt-3 text-success'>
        <h2>Total Cart Price RS - {total} $</h2>
    </div>
  )
}

export default CartPrice