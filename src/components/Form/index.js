import React, { useState } from "react";

const Form = ({ children, button, ...props }) => {
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

    const styles = props.styles !== undefined ? props.styles : {};
    return (
        <form
            {...props}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value={props.name} />
            <p hidden>
                <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                </label>
            </p>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    key: child.props.name,
                    name: child.props.name,
                    type: child.props.type,
                    styles,
                    handleChange,
                    handleFocus,
                    handleUnfocus,
                }),
            )}
            {button !== undefined ? (
                button
            ) : (
                <div className={styles.field}>
                    <button
                        className={[styles.button, styles.reversedColors].join(
                            " ",
                        )}
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            )}
        </form>
    );
};

export default Form;
