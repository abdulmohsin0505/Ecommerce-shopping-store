import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../Redux/ACTION/ActionTypes'
import "./Style/Products.css"
import {
    Button,
    Card,
    CardBody,
    Col,
    CardTitle,
    CardText
} from 'reactstrap'

function Products({ product, products }) {
    const dispatch = useDispatch()

    const cartStyle = { 
        height: "100%", width: "200px",
        
    }

    return (
        <>{
            (products && product).map(prod => {
                const { id, image, category, price, title } = prod
                const reducedTitle = title.slice(0, 18)
                return (

                    <Col 
                        className="my-md-2 my-sm-2 ms-sm-1 products"
                        key={id}
                    >
                        <Card style={cartStyle} className="product-cart">
                            <Link to={`/product/${id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                <CardBody>
                                    <img src={image} alt={title} height="150px" width="150px" />
                                    <CardTitle tag="h6">
                                        {category}
                                    </CardTitle>
                                    <CardText>{reducedTitle}</CardText>
                                    <p className='my-0'>Rs - {price} $</p>
                                </CardBody>
                            </Link>
                            <Button
                                onClick={() => dispatch(addProduct(prod))}
                            >
                                Buy
                            </Button>
                        </Card>
                    </Col>
                )
            })
        }</>
    )
}

export default Products