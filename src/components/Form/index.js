import React, { useState } from "react";

const Form = ({ children, button, ...props }) => {
    // const [isValidated, setIsValidated] = useState(false);
    const [state, setState] = useState({});
    const [fieldFocused, setFieldFocused] = useState();
    const handleChange = (e) => {
        console.log(e.target.name);
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const handleFocus = (e) => {
        setFieldFocused(e.target.name);
    };
    const handleUnfocus = (e) => {
        setFieldFocused();
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: encode({
    //             "form-name": form.getAttribute("name"),
    //             ...state,
    //         }),
    //     })
    //         .then((response) => {
    //             console.log("success");
    //         })
    //         .catch((error) => alert(error));
    // };

    const styles = props.styles !== undefined ? props.styles : {};
    return (
        <form
            {...props}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value={props.name} />
            <p hidden>
                <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                </label>
            </p>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    key: child.props.name,
                    name: child.props.name,
                    type: child.props.type,
                    styles: styles,
                    handleChange: handleChange,
                    handleFocus: handleFocus,
                    handleUnfocus: handleUnfocus,
                });
            })}
            {button !== undefined ? (
                button
            ) : (
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
            )}
        </form>
    );
};

// function encode(data) {
//     return Object.keys(data)
//         .map(
//             (key) =>
//                 encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//         )
//         .join("&");
// }

export default Form;
