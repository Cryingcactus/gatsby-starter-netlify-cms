import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "gatsby";
import styles from "./Navbar.module.css";

const Navbar = ({ uri }) => {
    const { state } = useContext(ThemeContext);
    const onContactPage = uri ? uri.includes("/contact") : false;
    return (
        <nav>
            <div className={[styles.container, "section"].join(" ")}>
                <div id="navMenu" className={styles.menu}>
                    <div>
                        <Link to="/" className={styles.item} title="Logo">
                            <span
                                className={styles.logo}
                                style={{ color: state.theme.logoColor }}
                            >
                                tgthr
                            </span>
                        </Link>
                    </div>
                    <div className={styles.items}>
                        <Link className={styles.item} to="/values">
                            <span>values</span>
                        </Link>
                        <Link className={styles.item} to="/solutions">
                            <span>solutions</span>
                        </Link>
                        <Link className={styles.item} to="/beliefs">
                            <span>beliefs</span>
                        </Link>
                        <Link
                            className={`${styles.item} ${styles.contact}`}
                            to="/contact"
                        >
                            <button>
                                <span>contact</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
