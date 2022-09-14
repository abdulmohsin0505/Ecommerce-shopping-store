import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'
import { removeProduct, fetchProd, addProduct } from '../Redux/ACTION/ActionTypes'
import Shop from './Shop'
import "./Style/ProductDetail.css"

function ProductDetail() {
  const product = useSelector(state => state.product)

  const dispatch = useDispatch()
  const { productId } = useParams()

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProd(productId))
    return () => {
      dispatch(removeProduct())
    }
  }, [productId])

  const { image, title, category, price ,rating} = product
  // const {rate} = rating
  return (
    <div className='container mt-5 pt-5 center'>
      <div className='float-start'>
        <img src={image} alt={category} width="250px" height="300px" className='products-image'/>
      </div>
      <div className='float-start m-md-5 ms-sm-5 pt-3 float-sm-none products-desc'>
        <h3 className='product-title'>{category}</h3>
        <p>{title}</p>
        <strong>Rating {rating && rating.rate}</strong><br/>
        <h6>Rs - {price} $</h6>
        <div>
          <Button
            onClick={() => dispatch(addProduct(product))}
          >
            Buy
          </Button>
          <Link to="/" element={<Shop />}>
            <Button
              color='success' className='ms-2'
            >
              Back
            </Button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail