import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import styles from "./PostsPagination.module.css";

const PostsContainer = ({ posts }) => (
    <div className={styles.postsContainer}>
        {posts.map((item) => {
            const post = item.node.frontmatter;
            return (
                <div className={styles.post}>
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: post.featuredimage,
                            alt: "Featured Image",
                        }}
                        style={{ height: "280px", width: "444px" }}
                    />
                    <p>{post.date}</p>
                    <h3>{post.title}</h3>
                </div>
            );
        })}
    </div>
);

PostsContainer.propTypes = {
    posts: PropTypes.arrayOf({}).isRequired,
};

export default PostsContainer;
