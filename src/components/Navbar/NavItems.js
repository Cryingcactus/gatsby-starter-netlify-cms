import React from "react";
import { Link } from "gatsby";
import styles from "./Navbar.module.css";

const NavItems = () => (
    <>
        <Link className={styles.item} to="/values">
            <h4>our values</h4>
        </Link>
        <Link className={styles.item} to="/services">
            <h4>our services</h4>
        </Link>
        <Link className={styles.item} to="/blog">
            <h4>our blog</h4>
        </Link>
        <Link className={`${styles.item} ${styles.contact}`} to="/contact">
            <button type="button">
                <h4>contact</h4>
            </button>
        </Link>
    </>
);

export default NavItems;
