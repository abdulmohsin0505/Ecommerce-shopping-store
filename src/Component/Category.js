import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Style/Category.css"
function Category({ products, setProduct }) {
    const array = []
    products.map(data => array.push(data.category))

    const allCategories = ["all", ...new Set(array)];
    // console.log(allCategories)
    const [categories, setCategories] = useState(allCategories)


    const filterProduct = (category) => {
        if (category === "all" ) {
            setProduct(products)
            return;
        }
        const newProduct = products.filter(product => product.category === category)
        setProduct(newProduct)
    }
    
    useEffect(() => {
        setCategories(allCategories)
        setProduct(products)
    },[products])
    return (
        <ul className="category-menu" >
            {
                categories.map((category, idx) => {
                    return (
                        <li key={idx}>
                            <Link to=""
                            onClick={() => filterProduct(category)}
                            
                             className='menu-links'
                             >
                                {category}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Category