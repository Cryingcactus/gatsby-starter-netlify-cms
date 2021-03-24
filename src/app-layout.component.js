import React from "react";
import PropTypes from "prop-types";

// Global application wrapper
export const AppLayout = ({ children }) => <main>{children}</main>;

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
