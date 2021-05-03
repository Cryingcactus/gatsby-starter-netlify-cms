import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./RelatedPosts.module.css";
import Card from "./Card";

const RelatedPosts = ({ posts, readMore }) => {
    return (
        <section className="section">
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2>related posts</h2>
                </div>
                <div className={styles.cardsContainer}>
                    {posts.slice(0, 3).map((item) => {
                        const post = item.node.frontmatter;
                        return <Card post={post} item={item} />;
                    })}
                </div>
                {readMore ? (
                    <div className={styles.buttonContainer}>
                        <Link to="/blog">
                            <button className={styles.readMore}>
                                <h3>read more</h3>
                            </button>
                        </Link>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </section>
    );
};

RelatedPosts.propTypes = {};

RelatedPosts.defaultProps = {
    posts: [],
};

export default RelatedPosts;
