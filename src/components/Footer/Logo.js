import React from "react";
import { Link } from "gatsby";
import Icon from "./Icon.js";
import styles from "./Footer.module.css";

const Logo = ({ ...props }) => {
    return (
        <div className={styles.verticalColumn}>
            <h3 className={styles.logo}>
                <Link to="/" title="Logo">
                    <Icon />
                </Link>
            </h3>
            <span
                className={[styles.email, "a"].join(" ")}
                onClick={() => {
                    window.open("mailto:hello@tgthrco.com");
                }}
            >
                hello@tgthrco.com
            </span>
            <span className={styles.legal}>
                <div>© 2021 tgthr llc</div>
                <div>
                    <Link to="/terms-of-use">Terms</Link>
                    <span>/</span>
                    <Link to="/privacy-policy">Privacy</Link>
                </div>
            </span>
        </div>
    );
};

Logo.propTypes = {};

export default Logo;
