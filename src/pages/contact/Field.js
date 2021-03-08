import React from "react";
import styles from "./Contact.module.css";

const Field = ({
    name,
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
                htmlFor={name}
            >
                {label}
            </label>
            <div className={styles.control}>
                {textArea ? (
                    <textArea
                        className={styles.reversedColors}
                        type={"text"}
                        name={name}
                        id={name}
                        required={true}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleUnfocus}
                    />
                ) : (
                    <input
                        type={"text"}
                        name={name}
                        id={name}
                        required={true}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleUnfocus}
                    />
                )}
            </div>
        </div>
    );
};

export default Field;
