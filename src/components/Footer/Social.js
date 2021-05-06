import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const Social = ({ ...props }) => {
    return (
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
    );
};

Social.propTypes = {};

export default Social;
