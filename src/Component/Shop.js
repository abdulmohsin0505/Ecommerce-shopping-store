import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchProduct } from '../Redux/ACTION/ActionTypes'
import {
    Container,
    Row
} from 'reactstrap'

import Category from './Category'
import Products from './Products'

function Shop() {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(products)
    console.log(products)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    return (
        <Container className='mt-5 py-3'>
            <Row className="center">
                <div className='text-center fst-italic my-3 mt-5'>
                    <h3 className='text-success d-inline border-bottom border-warning pb-2 '>All Categories</h3>
                </div>
                <Category products={products} setProduct={setProduct} />
                <div className='text-center fst-italic  my-3'>
                    <h3 className='text-success d-inline border-bottom border-warning pb-2'>All Products</h3>
                </div>
                <Products products={products} product={product} />
            </Row>
        </Container>
    )
}

export default Shop