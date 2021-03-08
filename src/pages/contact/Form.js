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
        <div>
            <form
                className={styles.form}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                </div>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        key: child.props.index,
                        fieldFocused:
                            (state[child.props.index] !== undefined &&
                                state[child.props.index] !== "") ||
                            fieldFocused === child.props.index,
                        handleChange: handleChange,
                        handleFocus: handleFocus,
                        handleUnfocus: handleUnfocus,
                    });
                })}
                <div className={styles.field}>
                    <button
                        className={[styles.button, styles.reversedColors].join(
                            " "
                        )}
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
            <form
                className={styles.form}
                name="test"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="test" />
                <div hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                </div>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        key: child.props.index,
                        fieldFocused:
                            (state[child.props.index] !== undefined &&
                                state[child.props.index] !== "") ||
                            fieldFocused === child.props.index,
                        handleChange: handleChange,
                        handleFocus: handleFocus,
                        handleUnfocus: handleUnfocus,
                    });
                })}
                <div className={styles.field}>
                    <button
                        className={[styles.button, styles.reversedColors].join(
                            " "
                        )}
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
            <form
                className={styles.form}
                name="test2"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="test2" />
                <div hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                </div>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        key: child.props.index,
                        fieldFocused:
                            (state[child.props.index] !== undefined &&
                                state[child.props.index] !== "") ||
                            fieldFocused === child.props.index,
                        handleChange: handleChange,
                        handleFocus: handleFocus,
                        handleUnfocus: handleUnfocus,
                    });
                })}
                <Field
                    index={"name"}
                    label={"what should we call you?"}
                    fieldFocused={
                        (state[child.props.index] !== undefined &&
                            state[child.props.index] !== "") ||
                        fieldFocused === child.props.index
                    }
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleUnfocus={handleUnfocus}
                />
                <Field
                    index={"work"}
                    label={"where do you work?"}
                    fieldFocused={
                        (state[child.props.index] !== undefined &&
                            state[child.props.index] !== "") ||
                        fieldFocused === child.props.index
                    }
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleUnfocus={handleUnfocus}
                />
                <Field
                    index={"title"}
                    label={"what’s your title?"}
                    fieldFocused={
                        (state[child.props.index] !== undefined &&
                            state[child.props.index] !== "") ||
                        fieldFocused === child.props.index
                    }
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleUnfocus={handleUnfocus}
                />
                <Field
                    index={"message"}
                    label={"what’s on your mind?"}
                    textArea
                />
                <div className={styles.field}>
                    <button
                        className={[styles.button, styles.reversedColors].join(
                            " "
                        )}
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
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
