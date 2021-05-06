import React from "react";
import PropTypes from "prop-types";

import styles from "./Footer.module.css";
import FooterForm from "./FooterForm";
import Logo from "./Logo.js";
import Social from "./Social";

const Footer = ({ children }) => (
    <div className={styles.centered}>
        {children}
        <div
            className={[
                styles.desktop,
                styles.row,
                styles.bottomRowContainer,
            ].join(" ")}
        >
            <Logo />
            <div
                className={[styles.verticalColumn, styles.socialBar].join(" ")}
            >
                <FooterForm />
                <Social />
            </div>
        </div>
        <div
            className={[
                styles.mobile,
                styles.verticalColumn,
                styles.bottomRowContainer,
            ].join(" ")}
        >
            <div className={[styles.formHolder].join(" ")}>
                <FooterForm />
            </div>
            <div className={[styles.horizontalRow, styles.socialBar].join(" ")}>
                <Logo />
                <Social />
            </div>
        </div>
    </div>
);

Footer.propTypes = {
    children: PropTypes.shape({}).isRequired,
};

export default Footer;
