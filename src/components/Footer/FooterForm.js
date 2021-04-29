import React from "react";
import Form from "../Form";
import Field from "../Field";
import styles from "./Footer.module.css";

const FooterForm = ({ ...props }) => {
    return (
        <Form
            className={styles.form}
            name="Email List"
            styles={styles}
            button={""}
        >
            <Field
                name={"email"}
                label={"get insights delivered to your inbox."}
                type={"email"}
                placeholder={"what's your email?"}
                button={
                    <button className={styles.submit} type="submit">
                        <span className={styles.arrow} />
                    </button>
                }
            />
        </Form>
    );
};

export default FooterForm;
