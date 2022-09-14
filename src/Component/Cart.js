import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container } from 'reactstrap';
import {removeCartProduct,incQuantity} from "../Redux/ACTION/ActionTypes"
import CartPrice from './CartPrice';

function Cart() {
  const carts = useSelector(state => state.cart.cart)
   const dispatch = useDispatch()

  return (
    <Container className='mt-5 pt-3'>
      <Col>
        {
          carts.map((cart) => {
            const { id, image, price, category ,quantity} = cart
            console.log(cart)
            return (
                <div key={id}
               className="d-flex justify-content-center align-items-center mt-3">
                <div className=''>
                  <img src={image} alt={category} height="150px" width="150px" />
                </div>
                <div className='ms-3'>
                  <h6>{category}</h6>
                  <strong>Rs - {price} $</strong>
                </div>
                <div className='m-5'>
                  <Button
                   size='sm'
                   onClick={() =>dispatch(incQuantity(id,-1))}
                   >
                    -
                   </Button>
                  <strong>{quantity}</strong>
                  <Button
                   size='sm' 
                   onClick={() =>dispatch(incQuantity(id,1))}
                   >+</Button>
                  <Button
                    size='sm' color='danger'
                    onClick={() => dispatch(removeCartProduct(cart))}
                    className="ms-2"
                  >
                    Remove
                  </Button>
                </div>
              </div>
              
            )
          })
        }
        <CartPrice carts={carts}/>
      </Col>
    </Container>
  )
}

export default Cart