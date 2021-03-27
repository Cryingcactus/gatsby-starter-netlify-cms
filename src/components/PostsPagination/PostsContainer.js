import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import styles from "./PostsPagination.module.css";

const PostsContainer = ({ posts }) => (
    <div className={styles.postsContainer}>
        {posts.map((item) => {
            const post = item.node.frontmatter;
            return (
                <Link to={item.node.fields.slug}>
                    <div className={styles.post}>
                        <div
                            style={{
                                height: "280px",
                                width: "444px",
                                border: post.featuredimage
                                    ? "none"
                                    : "solid #000000 1px",
                            }}
                        >
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: post.featuredimage,
                                    alt: "Featured Image",
                                }}
                                style={{ height: "280px", width: "444px" }}
                            />
                        </div>
                        <p>{post.date}</p>
                        <h3>{post.title}</h3>
                    </div>
                </Link>
            );
        })}
    </div>
);

PostsContainer.propTypes = {
    posts: PropTypes.arrayOf({}).isRequired,
};

export default PostsContainer;
