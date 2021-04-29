import React from "react";
import PropTypes from "prop-types";

const Neighbors = ({
    currentPage,
    setCurrentPage,
    startIndex,
    endIndex,
    lastPage,
}) => {
    const neighbors = [];
    for (let i = startIndex; i < endIndex && i < lastPage; i += 1) {
        if (i >= 0) {
            neighbors.push(
                <span
                    key={i}
                    className="p3"
                    tabIndex={0}
                    aria-label={`Page ${i + 1}`}
                    role="button"
                    onKeyPress={() => {}}
                    onClick={() => setCurrentPage(i)}
                    style={i === currentPage ? { fontWeight: "bold" } : {}}
                >
                    {i + 1}
                </span>,
            );
        }
    }
    return neighbors;
};

Neighbors.propTypes = {
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    startIndex: PropTypes.number,
    endIndex: PropTypes.number,
    lastPage: PropTypes.number,
};

export default Neighbors;
