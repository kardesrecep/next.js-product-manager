import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'
import {FaEdit} from 'react-icons/fa'
import BtnDeleteProduct from './BtnDeleteProduct'

const ProductRow = ({id,title,category,price,seq}) => {

  return (
   <tr>
    <td>{seq}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>${price}</td>
    <td>
    
     <Link href={"/dashboard/products/${id}"}  className='text-success'> <FaEdit/> </Link>
     <BtnDeleteProduct id={id}/>
    </td>
   </tr>
  )
}

export default ProductRow