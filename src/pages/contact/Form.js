import React, { useState } from "react";
import styles from "./Contact.module.css";

const Form = ({ children }) => {
    const [isValidated, setIsValidated] = useState(false);
    const [state, setState] = useState({});
    const [fieldFocused, setFieldFocused] = useState();
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleFocus = (e) => {
        setFieldFocused(e.target.name);
    };
    const handleUnfocus = (e) => {
        setFieldFocused();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(
            encode({
                "form-name": form.getAttribute("name"),
                ...state,
            })
        );
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...state,
            }),
        })
            .then((response) => {
                console.log("success");
                console.log(response);
            })
            .catch((error) => alert(error));
    };
    return (
        <form
            className={styles.form}
            name="contactLeads"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contactLeads" />
            <div hidden>
                <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                </label>
            </div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    key: child.props.name,
                    name: child.props.name,
                    fieldFocused:
                        (state[child.props.name] !== undefined &&
                            state[child.props.name] !== "") ||
                        fieldFocused === child.props.name,
                    handleChange: handleChange,
                    handleFocus: handleFocus,
                    handleUnfocus: handleUnfocus,
                });
            })}
            <div className={styles.field}>
                <button
                    className={[styles.button, styles.reversedColors].join(" ")}
                    type="submit"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

export default Form;
