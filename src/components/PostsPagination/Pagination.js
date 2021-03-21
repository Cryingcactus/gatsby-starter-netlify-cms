import React from "react";
import PropTypes from "prop-types";
import styles from "./PostsPagination.module.css";

const Pagination = ({
    lengthOfPosts,
    currentPage,
    setCurrentPage,
    postsPerPage,
}) => {
    const spread = 3;
    const range = Math.floor(spread / 2);
    const lastPage = Math.ceil(lengthOfPosts / postsPerPage);

    const previous =
        currentPage > 0 ? (
            <span className={[styles.arrow, styles.prev].join(" ")} />
        ) : (
            ""
        );

    const first =
        currentPage > range ? (
            <span className="p3" onClick={() => setCurrentPage(0)}>
                1...
            </span>
        ) : (
            ""
        );
    const neighbors = [];
    for (
        let i = currentPage - range;
        i < currentPage + range + 1 && i < lastPage;
        i++
    ) {
        if (i >= 0) {
            neighbors.push(
                <span
                    key={i}
                    className="p3"
                    onClick={() => setCurrentPage(i)}
                    style={i === currentPage ? { fontWeight: "bold" } : {}}
                >
                    {i + 1}
                </span>
            );
        }
    }
    const last =
        currentPage + 1 < lastPage - range ? (
            <span className="p3" onClick={() => setCurrentPage(lastPage - 1)}>
                ...{lastPage}
            </span>
        ) : (
            ""
        );

    const next =
        currentPage < lastPage ? (
            <span className={[styles.arrow, styles.next].join(" ")} />
        ) : (
            ""
        );
    return (
        <div className={styles.paginationContainer}>
            {previous}
            {first}
            {neighbors}
            {last}
            {next}
        </div>
    );
};

Pagination.propTypes = {
    lengthOfPosts: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.number.isRequired,
    postsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
