import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../Redux/ACTION/ActionTypes'
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
        height: "320px", width: "200px" 
    }

    return (
        <>{
            (products && product).map(prod => {
                const { id, image, category, price, title } = prod
                const reducedTitle = title.slice(0, 18)
                return (

                    <Col xs="5" sm="4" md="4" lg="3" xl="2"
                        className="m-xl-2 m-lg-1 m-sm-1 m-md-1 "
                        key={id}
                    >
                        <Card style={cartStyle}>
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