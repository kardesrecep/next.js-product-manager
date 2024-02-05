import Image from "next/image";
import React from "react";
import { Badge, Col, Row } from "react-bootstrap";

const ProductDetails = ({ product }) => {
	const { title, price, description, image, category } = product;
	return (
		<Row>
			<Col md={6}>
				<Image
					src={image}
					alt={title}
					height={500}
					width={500}
					style={{ objectFit: "cover" }}
					className="img-fluid"
				/>
			</Col>

			<Col md={6}>
				<h2>{title}</h2>
				<p>{description}</p>
				<h4>
					<Badge className="bg-danger"> {category} </Badge>
					<Badge className="bg-secondary ms-2"> {price} </Badge>
				</h4>
			</Col>
		</Row>
	);
};

export default ProductDetails;
