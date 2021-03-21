import React from "react";
import PropTypes from "prop-types";

const EndPages = ({
    label,
    indexToLink,
    conditionToRender,
    setCurrentPage,
}) => {
    if (conditionToRender) {
        return (
            <span
                className="p3"
                tabIndex={0}
                aria-label={label}
                role="button"
                onKeyPress={() => {}}
                onClick={() => setCurrentPage(indexToLink)}
            >
                {indexToLink !== 0 ? <span>...</span> : ""}
                <span>{indexToLink + 1}</span>
                {indexToLink === 0 ? <span>...</span> : ""}
            </span>
        );
    }
    return "";
};

EndPages.propTypes = {
    label: PropTypes.string,
    indexToLink: PropTypes.number,
    conditionToRender: PropTypes.bool,
    setCurrentPage: PropTypes.func,
};

export default EndPages;
