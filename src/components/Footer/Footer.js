import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
import FooterForm from "./FooterForm";

const Footer = ({ children }) => (
    <div className={styles.centered}>
        {children}
        <div className={[styles.row, styles.bottomRowContainer].join(" ")}>
            <div className={styles.verticalColumn}>
                <h3 className={styles.logo}>tgthr</h3>
                <span className={styles.email}>hello@tgthrco.com</span>
                <span className={styles.legal}>
                    <div>© 2021 tgthr llc</div>
                    <div>
                        <Link to="/terms-of-use">Terms</Link>
                        <span>/</span>
                        <Link to="/privacy-policy">Privacy</Link>
                    </div>
                </span>
            </div>
            <div
                className={[styles.verticalColumn, styles.socialBar].join(" ")}
            >
                <FooterForm />
                <div className={styles.social}>
                    <a
                        href="https://www.instagram.com/tgthrcollective/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://twitter.com/tgthrco"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/tgthr-collective"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

Footer.propTypes = {
    children: PropTypes.shape({}).isRequired,
};

export default Footer;
