import React from "react";
import PropTypes from "prop-types";
import EndPages from "./EndPages";
import Neighbors from "./Neighbors";
import Arrow from "./Arrow";

const Pagination = ({
    lengthOfPosts,
    currentPage,
    setCurrentPage,
    postsPerPage,
    containerStyle,
}) => {
    const spread = 3;
    const range = Math.floor(spread / 2);
    const lastPage = Math.ceil(lengthOfPosts / postsPerPage);
    return (
        <div className={containerStyle}>
            <Arrow
                conditionToRender={currentPage > 0}
                label="Previous Page"
                direction="prev"
                width="25px"
                click={() => {
                    setCurrentPage(currentPage - 1);
                }}
            />
            <EndPages
                label="First Page"
                indexToLink={0}
                conditionToRender={currentPage > range}
                setCurrentPage={setCurrentPage}
            />
            <Neighbors
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                startIndex={currentPage - range}
                endIndex={currentPage + range + 1}
                lastPage={lastPage}
            />
            <EndPages
                label="Last Page"
                indexToLink={lastPage - 1}
                conditionToRender={currentPage + 1 < lastPage - range}
                setCurrentPage={setCurrentPage}
            />
            <Arrow
                conditionToRender={currentPage < lastPage - 1}
                label="Next Page"
                direction="next"
                width="25px"
                click={() => {
                    setCurrentPage(currentPage + 1);
                }}
            />
        </div>
    );
};

Pagination.propTypes = {
    lengthOfPosts: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.number.isRequired,
    postsPerPage: PropTypes.number.isRequired,
    containerStyle: PropTypes.string.isRequired,
};

export default Pagination;
