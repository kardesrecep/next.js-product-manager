import React from "react";
import { Table } from "react-bootstrap";
import ProductRow from "./ProductRow";

const ProductList = ({ products }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Category</th>
					<th>Price</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{products.map((item,index) => (
					<ProductRow {...item} seq={index+1} key={index}/>
				))}
			</tbody>
		</Table>
	);
};

export default ProductList;
