import ProductList from '@/components/dashboard/products/ProductList';
import { config } from '@/utils/config';
import React from 'react'

const DasboardProductsPage =async () => {

  const resp=await fetch(`${config.apiUrl}/products`)
  const products=await resp.json()
  return (
    <div>


      <ProductList products={products}  />
    </div>
  )
}

export default DasboardProductsPage