import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

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
				/>
			</Col>
		</Row>
	);
};

export default ProductDetails;
