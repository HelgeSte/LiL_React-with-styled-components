import React from "react";
import PropTypes from "prop-types";

const SpreadPropsComponent = (props) => {
    return (
        <>
            <div>
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
            </div>
        </>
    );
};

// propTypes is a static property on a React component that defines the //
// type and sometimes the required nature of each prop it expects to receive. 
// When you use it, React will check the props passed to your component against 
// the definitions you've provided. If the types don't match, it will issue a 
// warning in the development console. This is incredibly helpful for catching 
// errors early, especially in large applications where multiple developers are 
// working on the same codebase.
SpreadPropsComponent.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default SpreadPropsComponent;