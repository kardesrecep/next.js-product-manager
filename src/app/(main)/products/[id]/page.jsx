import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import { config } from "@/utils/config";
import React from "react";
import ProductDetails from "@/components/products/ProductDetails";

export const generateMetadata =async({params})=> {
	//! title kismi dynamic olarak degisti
	const productId = params.id;
	if (!productId || isNaN(productId)) throw new Error("Invalid product id");
	const resp = await fetch(`${config.apiUrl}/products/${productId}`);
	const product = await resp.json();

	return{
		title:  product.title,
		description: product.description,
	}
	}
	
	


const ProductDetailsPage = async ({ params }) => {
	const productId = params.id;
	if (!productId || isNaN(productId)) throw new Error("Invalid product id");
	const resp = await fetch(`${config.apiUrl}/products/${productId}`);
	const product = await resp.json();

	//console.log(product);

	console.log(params);
	return (
		<div>
			<PageHeader title={product.title} />
			<Spacer height={50} />
			<ProductDetails product={product} />
			<Spacer height={50} />
		</div>
	);
};

export default ProductDetailsPage;
