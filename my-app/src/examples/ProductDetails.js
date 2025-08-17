import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
    const product = {
        name: "React T-Shirt",
        price: "$19.99",
        image: "react-tshirt.jpg",
    };
    return <div>
        <ProductImage imageUrl={product.image} />
        <ProductInfo name={product.name} price={product.price} />
        <ProductImage />
    </div>
};

export default ProductDetails;