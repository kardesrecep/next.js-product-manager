import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import ProductList from '@/components/products/ProductList'
import { config } from '@/utils/config'
import React from 'react'

export const metadata = {
  title: "Products",
  description: "You can get luxyry furniture",
}

const ProductsPage = async() => {

const resp=await fetch(`${config.apiUrl}/products`)
const product=await resp.json()
//console.log(products)



  return (
    <div>
        <PageHeader title="Products" />
        <Spacer height={50}/>
        <ProductList  product={product} /> 
        <Spacer/>
        
      </div>
  )
}

export default ProductsPage