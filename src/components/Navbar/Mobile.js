import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./Navbar.module.css";

const Mobile = ({ ...props }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            ref.current.style = `--barsColor: ${
                menuOpen ? "#f85a3e" : "#181925"
            };`;
        }
    }, [ref, menuOpen]);

    return (
        <div
            className={styles.mobile}
            tabIndex={0}
            aria-label="Mobile Menu"
            role="button"
            onKeyPress={() => {}}
            onClick={() => {
                setMenuOpen(!menuOpen);
            }}
            ref={ref}
        >
            <div
                className={[
                    styles.mobileMenu,
                    menuOpen ? styles.open : styles.closed,
                ].join(" ")}
            >
                <div className={styles.mobileContainer}>
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
                        <button type="button">
                            <h4>contact</h4>
                        </button>
                    </Link>
                </div>
            </div>
            <span className={styles.menu}>
                <span className={styles.bar} />
            </span>
        </div>
    );
};

Mobile.propTypes = {};

export default Mobile;
