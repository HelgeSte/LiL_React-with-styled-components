import React from "react";
import SpreadPropsComponent from "./SpreadPropsComponent";

const Parent = () => {
    
    const propsObject = {
        heading: 'Welcome to React Spreading',
        description: 'Learn about prop spreading in react',
        /* After preading, these properties becomes props.heading and props.description in
           SpreadPropsComponent.js, and saves us from typing it like this:
                <SpreadPropsComponent heading={propsObject.heading} 
                    description={propsObject.description} />
            This is specially useful when you have a large number of props or
            when the props are dynamic.
        */
    }
    return (
        <>
            <SpreadPropsComponent {...propsObject} /> 
        </>
    );
};

export default Parent;