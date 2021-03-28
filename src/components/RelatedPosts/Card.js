import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./RelatedPosts.module.css";

const Card = ({ post, item }) => {
    return (
        <Link to={item.node.fields.slug}>
            <div className={styles.card}>
                <div className={styles.post}>
                    <p>update</p>
                    <div className={styles.postTitleContainer}>
                        <h3>{post.title}</h3>
                    </div>
                    <p>{post.date}</p>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {};

export default Card;
