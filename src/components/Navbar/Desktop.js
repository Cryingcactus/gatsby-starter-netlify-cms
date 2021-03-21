import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./Navbar.module.css";

const Desktop = ({ ...props }) => (
    <div className={styles.desktop}>
        <Link className={styles.item} to="/values">
            <h4>values</h4>
        </Link>
        <Link className={styles.item} to="/solutions">
            <h4>solutions</h4>
        </Link>
        <Link className={styles.item} to="/beliefs">
            <h4>beliefs</h4>
        </Link>
        <Link className={`${styles.item} ${styles.contact}`} to="/contact">
            <button type="button">
                <h4>contact</h4>
            </button>
        </Link>
    </div>
);

Desktop.propTypes = {};

export default Desktop;
