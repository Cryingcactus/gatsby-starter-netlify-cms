import React from "react";
import { Link } from "gatsby";
import styles from "./Navbar.module.css";

const Navbar = ({ ...props }) => {
    return (
        <nav>
            <div className={styles.container}>
                <div id="navMenu" className={styles.menu}>
                    <div>
                        <Link to="/" className={styles.item} title="Logo">
                            <span className={styles.logo}>tgthr</span>
                        </Link>
                    </div>
                    <div className={styles.items}>
                        {/*<Link className={styles.item} to="/about">
                            <span>about</span>
                        </Link>
                        <Link className={styles.item} to="/services">
                            <span>services</span>
                        </Link>
                        <Link className={styles.item} to="/blog">
                            <span>blog</span>
						</Link>*/}
                        <Link
                            className={`${styles.item} ${styles.contact}`}
                            to="/contact"
                        >
                            <span>contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
