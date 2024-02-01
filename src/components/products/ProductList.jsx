
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductItem from './ProductItem'

const ProductList = ({product}) => {
  return (
    <Row className='g-3 ' xs={1} sm={2}  md={2}  lg={3}    >
        {
            product.map((item)=>(<Col key={item.id} >
<ProductItem {...item}/>



            </Col>))
        }
    </Row>
  )
}

export default ProductList