import React from "react";
import PropTypes from "prop-types";

//const ProductInfo = (props) => {
const ProductInfo = ({ product} ) => {
    /* return <div><h2>{props.name}</h2><p>{props.price}</p></div>*/
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    );
};

ProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default ProductInfo;