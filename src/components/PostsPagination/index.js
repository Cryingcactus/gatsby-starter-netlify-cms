import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./PostsPagination.module.css";
import PostsContainer from "./PostsContainer";
import Pagination from "./Pagination";

const PostsPagination = ({ posts }) => {
    const [searchedBy, setSearchedBy] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [currentPosts, setCurrentPosts] = useState([]);
    const postsPerPage = 1;

    useEffect(() => {
        const postsBuffer = [];
        for (
            let i = currentPage * postsPerPage;
            i < posts.length &&
            postsBuffer.length < currentPage * postsPerPage + postsPerPage;
            i++
        ) {
            const post = posts[i];
            const frontmatter = post.node.frontmatter;
            const { title, tags } = frontmatter;
            const regex = new RegExp(`.*${searchedBy.toLowerCase()}.*`);
            if (title.toLowerCase().match(regex)) {
                postsBuffer.push(post);
            } else if (tags) {
                for (let j = 0; j < tags.length; j++) {
                    const tag = tags[j];
                    if (tag.toLowerCase().match(regex)) {
                        postsBuffer.push(post);
                        break;
                    }
                }
            }
        }
        setCurrentPosts(postsBuffer);
    }, [currentPage, searchedBy]);

    return (
        <section className="section">
            <div className={styles.container}>
                <div className={styles.searchAreaContainer}>
                    <div className={styles.item}>
                        <select>
                            <option value="test">test</option>
                        </select>
                    </div>
                    <div className={styles.item}>
                        <input
                            value={searchedBy}
                            onChange={(e) => {
                                setSearchedBy(e.target.value);
                            }}
                        />
                        <span />
                    </div>
                </div>
                <PostsContainer posts={currentPosts} />
                <div>
                    <Pagination
                        lengthOfPosts={posts.length}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        postsPerPage={postsPerPage}
                    />
                </div>
            </div>
        </section>
    );
};

PostsPagination.propTypes = { posts: PropTypes.shape({}).isRequired };

export default PostsPagination;
