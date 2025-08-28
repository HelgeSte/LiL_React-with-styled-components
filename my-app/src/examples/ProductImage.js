import React from "react";

const ProductImage = (props) => {
    return (
    <div>
        <img width="100px" src={props.imageUrl || 'default-image.jpg'} alt="Product" />
    </div>
    )};

export default ProductImage;