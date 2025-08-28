import React, {useEffect, useState} from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
    /*const product = {
        name: "React T-Shirt",
        price: "$19.99",
        image: "react-tshirt.jpg",
    };*/
    // replace the product object, and fetch data via an API:
    const [product, setProduct] = useState(null);

    /* This sequence of .then and .catch is a common pattern for handling asyncnhronous
    // operations, like fetching data. It is used to ensure that you handle both sucess
    // and errors. This pattern is part of modern JavaScript and is
    // used across varoius framework and libraries, aswell as in plain JavaScript
    // applications. */
    useEffect (() => {
        // function for the side effects. Runs after the component renders or rerenders
        fetch('https://api.example.com/products')
        // return a promise, that resolves the response to the request:
        .then(response => response.json())
        // handle the response body
        .then(data => setProduct(data))
        .catch(error => console.error('Error fetching data: ', error))
    }, []); // [] = dependency array, component only renders if any of the values 
            // changes between renders

    if(!product){ // empty
        return <p>Loading..</p>
    }
    return <div>
        <ProductImage imageUrl={product.image} />
        <ProductInfo name={product.name} price={product.price} />
        <ProductImage />
    </div>
};

export default ProductDetails;