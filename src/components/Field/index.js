import React from "react";

const Field = ({
    name,
    label,
    handleChange,
    handleFocus,
    handleUnfocus,
    type,
    styles,
    button,
    ...props
}) => {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <div className={styles.control}>
                <input
                    className={styles.input}
                    type={type}
                    name={name}
                    id={name}
                    required={true}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleUnfocus}
                    {...props}
                />
                {button ?? ""}
            </div>
        </div>
    );
};

export default Field;
