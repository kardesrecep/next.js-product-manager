import Loader from '@/components/common/loader'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center " style={
{fontSize:"15rem"}      
    }>
   	<Loader />
  </div>
  )
}

export default LoadingPage