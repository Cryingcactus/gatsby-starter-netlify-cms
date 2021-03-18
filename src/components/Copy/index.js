import React from "react";
import PropTypes from "prop-types";

const Copy = ({ copy, size, children }) => (
    <p className={"p2"} style={size ? { fontSize: size } : {}}>
        {children && children ? children : copy}
    </p>
);

Copy.propTypes = {
    copy: PropTypes.string,
    size: PropTypes.string,
};

export default Copy;
