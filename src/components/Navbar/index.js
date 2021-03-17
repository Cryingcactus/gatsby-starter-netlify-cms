import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "gatsby";
import styles from "./Navbar.module.css";

const Navbar = ({ uri }) => {
    const { state } = useContext(ThemeContext);
    return (
        <nav>
            <div className={[styles.container, "section"].join(" ")}>
                <div id="navMenu" className={styles.menu}>
                    <div>
                        <Link to="/" className={styles.item} title="Logo">
                            <h1
                                className={styles.logo}
                                style={{ color: state.theme.logoColor }}
                            >
                                tgthr
                            </h1>
                        </Link>
                    </div>
                    <div className={styles.items}>
                        <Link className={styles.item} to="/values">
                            <h4>values</h4>
                        </Link>
                        <Link className={styles.item} to="/solutions">
                            <h4>solutions</h4>
                        </Link>
                        <Link className={styles.item} to="/beliefs">
                            <h4>beliefs</h4>
                        </Link>
                        <Link
                            className={`${styles.item} ${styles.contact}`}
                            to="/contact"
                        >
                            <button>
                                <h4>contact</h4>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
