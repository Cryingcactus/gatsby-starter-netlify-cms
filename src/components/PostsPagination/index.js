import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./PostsPagination.module.css";
import PostsContainer from "./PostsContainer";
import Pagination from "../Pagination";
import Loading from "../Loading";

const PostsPagination = ({ posts }) => {
    const [loading, setLoading] = useState(false);
    const [searchedBy, setSearchedBy] = useState("");
    const [filteredBy, setFilteredBy] = useState("allPosts");
    const [currentPage, setCurrentPage] = useState(0);
    const [currentPosts, setCurrentPosts] = useState([]);
    const postsPerPage = 6;

    useEffect(() => {
        setLoading(true);
        const postsBuffer = [];
        let i = currentPage * postsPerPage;
        let range = 0;
        while (
            range < posts.length &&
            i < currentPage * postsPerPage + postsPerPage
        ) {
            const post = posts[range];
            const { title, tags, featuredpost } = post.node.frontmatter;
            if (
                (filteredBy === "featuredPosts" && featuredpost) ||
                filteredBy === "allPosts"
            ) {
                const regex = new RegExp(`.*${searchedBy.toLowerCase()}.*`);
                if (title.toLowerCase().match(regex)) {
                    postsBuffer.push(post);
                    i += 1;
                } else if (tags) {
                    for (let j = 0; j < tags.length; j += 1) {
                        const tag = tags[j];
                        if (tag.toLowerCase().match(regex)) {
                            postsBuffer.push(post);
                            i += 1;
                            break;
                        }
                    }
                }
            }
            range += 1;
        }
        setLoading(false);
        setCurrentPosts(postsBuffer);
    }, [currentPage, searchedBy, filteredBy]);

    return (
        <section className="section">
            <div className={styles.container}>
                <div className={styles.searchAreaContainer}>
                    <div className={styles.item}>
                        <select
                            className={["p1", styles.filter].join(" ")}
                            value={filteredBy}
                            onChange={(event) => {
                                setFilteredBy(event.target.value);
                            }}
                        >
                            <option value="allPosts">all posts</option>
                            <option value="featuredPosts">featured</option>
                        </select>
                    </div>
                    <div className={styles.item}>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                setSearchedBy(event.target[0].value);
                            }}
                        >
                            <input
                                name="search"
                                className={["p1", styles.searchBar].join(" ")}
                            />
                            <button
                                className={styles.searchButton}
                                type="submit"
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>
                </div>
                {loading ? (
                    <Loading />
                ) : (
                    <PostsContainer posts={currentPosts} />
                )}
                <div>
                    <Pagination
                        lengthOfPosts={posts}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        postsPerPage={postsPerPage}
                        containerStyle={styles.paginationContainer}
                    />
                </div>
            </div>
        </section>
    );
};

PostsPagination.propTypes = { posts: PropTypes.shape({}) };

PostsPagination.defaultProps = { posts: [] };

export default PostsPagination;
