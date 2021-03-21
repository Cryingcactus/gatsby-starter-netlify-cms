import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Mobile = ({ ...props }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { dispatch } = useContext(ThemeContext);
    return (
        <div
            className={styles.mobile}
            tabIndex={0}
            aria-label="Mobile Menu"
            role="button"
            onKeyPress={() => {}}
            onClick={() => {
                dispatch({
                    type: "mobileNav",
                    open: !menuOpen,
                    backgroundColor: "#000000",
                });
                setMenuOpen(!menuOpen);
            }}
        >
            <div
                className={[
                    styles.mobileMenu,
                    menuOpen ? styles.open : styles.closed,
                ].join(" ")}
            >
                menu
            </div>
            <span className={styles.menu}>
                <span className={styles.bar} />
            </span>
        </div>
    );
};

Mobile.propTypes = {};

export default Mobile;
