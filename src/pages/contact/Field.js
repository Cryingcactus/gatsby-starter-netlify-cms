import React from "react";
import styles from "./Contact.module.css";

const Field = ({
    index,
    label,
    fieldFocused,
    handleChange,
    handleFocus,
    handleUnfocus,
    textArea,
}) => {
    return (
        <div
            className={[
                styles.field,
                textArea ? styles.textareaField : "",
            ].join(" ")}
        >
            <label
                className={[
                    styles.label,
                    fieldFocused ? styles.fieldTitle : styles.placeholder,
                ].join(" ")}
                htmlFor={index}
            >
                {label}
            </label>
            <div className={styles.control}>
                {textArea ? (
                    <textArea
                        className={styles.reversedColors}
                        type={"text"}
                        name={index}
                        onChange={handleChange}
                        id={index}
                        required={true}
                        onFocus={handleFocus}
                        onBlur={handleUnfocus}
                    />
                ) : (
                    <input
                        type={"text"}
                        name={index}
                        onChange={handleChange}
                        id={index}
                        required={true}
                        onFocus={handleFocus}
                        onBlur={handleUnfocus}
                    />
                )}
            </div>
        </div>
    );
};

export default Field;
