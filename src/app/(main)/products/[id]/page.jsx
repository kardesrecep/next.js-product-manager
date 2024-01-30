import PageHeader from '@/components/common/page-header'
import React from 'react'

export const metadata={
  title:{
    absolute:"Free title"
  },
  description:"You can get luxyry furniture",
}

const ProductDetails = ({params}) => {
    console.log(params)
  return (
    <div>
        <PageHeader title="AABC-TEST" />
      ProductDetails: {params.id}</div>
  )
}

export default ProductDetails