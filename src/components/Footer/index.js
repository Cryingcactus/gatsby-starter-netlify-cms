import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";
import FooterForm from "./FooterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

const Footer = ({ ...props }) => {
    return (
        <footer className="section paralax-section">
            <div className={styles.container}>
                <div className={styles.centered}>
                    <div className={styles.row}>
                        <h2>let’s do something great, tgthr.</h2>
                        <h3>ready to get started? let’s talk.</h3>
                    </div>
                    <div
                        className={[styles.row, styles.lineContainer].join(" ")}
                    >
                        <div className={styles.line} />
                    </div>
                    <div
                        className={[styles.row, styles.bottomRowContainer].join(
                            " "
                        )}
                    >
                        <div className={styles.verticalColumn}>
                            <h3 className={styles.logo}>tgthr</h3>
                            <span className={styles.email}>
                                hello@tgthrco.com
                            </span>
                            <span className={styles.legal}>
                                <div>© 2021 tgthr llc</div>
                                <div>Privacy Policy</div>
                            </span>
                        </div>
                        <div
                            className={[
                                styles.verticalColumn,
                                styles.socialBar,
                            ].join(" ")}
                        >
                            <FooterForm />
                            <div className={styles.social}>
                                <Link
                                    to={
                                        "https://www.instagram.com/tgthrcollective/"
                                    }
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                                <Link
                                    to={"https://twitter.com/tgthrco"}
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link
                                    to={
                                        "https://www.linkedin.com/company/tgthr-collective"
                                    }
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
