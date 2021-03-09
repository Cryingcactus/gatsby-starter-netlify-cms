import React from "react";
import styles from "./Footer.module.css";
import Footer from "./Footer";

const Index = ({ parallax }) => {
    if (parallax) {
        return (
            <>
                <div className="paralax-placeholder footer-placeholder" />
                <footer className="section paralax-section">
                    <div className={[styles.container].join(" ")}>
                        <Footer>
                            <div className={styles.row}>
                                <h2>let’s do something great, tgthr.</h2>
                                <h3>ready to get started? let’s talk.</h3>
                            </div>
                            <div
                                className={[
                                    styles.row,
                                    styles.lineContainer,
                                ].join(" ")}
                            >
                                <div className={styles.line} />
                            </div>
                        </Footer>
                    </div>
                </footer>
            </>
        );
    } else {
        return (
            <footer className="section">
                <div
                    className={[styles.container, styles.contactPage].join(" ")}
                >
                    <Footer />
                </div>
            </footer>
        );
    }
};

export default Index;
