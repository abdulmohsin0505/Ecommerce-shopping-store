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
            <Category products={products} setProduct={setProduct} />
                <Products products={products} product={product} />
            </Row>
        </Container>
    )
}

export default Shop