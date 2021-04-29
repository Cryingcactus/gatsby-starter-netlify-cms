import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import NavItems from "./NavItems";

const Mobile = () => {
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
                    <NavItems />
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
