import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ ...props }) => {
    return (
        <footer>
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
                        {false ? (
                            <div
                                className={[
                                    styles.verticalColumn,
                                    styles.socialBar,
                                ].join(" ")}
                            >
                                <div>get insights delivered to your inbox.</div>
                                <div className={styles.emailInput}>
                                    <input />
                                    <span />
                                </div>
                                <div className={styles.social}>
                                    <span>f</span>
                                    <span>s</span>
                                    <span>i</span>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
