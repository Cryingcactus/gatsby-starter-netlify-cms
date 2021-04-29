import React from "react";
import PropTypes from "prop-types";

const TitledCopy = ({ title, size, children }) => {
    if (children) {
        return children;
    }
    return <h2 style={size ? { fontSize: size } : {}}>{title}</h2>;
};

TitledCopy.propTypes = {
    title: PropTypes.string,
    size: PropTypes.string,
};

export default TitledCopy;
