import React, { useState } from "react";
import Layout from "../../components/Layout";
import styles from "./Contact.module.css";
import Form from "./Form";
import Field from "./Field";

const Index = () => {
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
        <Layout>
            <section className="contact">
                <div className={styles.container}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.header}>let's get tgthr.</h1>
                    </div>
                    <div className={styles.formContainer}>
                        <form
                            className={styles.form}
                            name="contact5"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact5"
                            />
                            <p hidden>
                                <label>
                                    Don’t fill this out:{" "}
                                    <input
                                        name="bot-field"
                                        onChange={handleChange}
                                    />
                                </label>
                            </p>
                            <div className={[styles.field].join(" ")}>
                                <label
                                    className={[
                                        styles.label,
                                        fieldFocused === "name" ||
                                        (state.name !== undefined &&
                                            state.name !== "")
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"name"}
                                >
                                    what should we call you?
                                </label>
                                <div className={styles.control}>
                                    <input
                                        type={"text"}
                                        name={"name"}
                                        id={"name"}
                                        required={true}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={[styles.field].join(" ")}>
                                <label
                                    className={[
                                        styles.label,
                                        fieldFocused === "company" ||
                                        (state.company !== undefined &&
                                            state.company !== "")
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"company"}
                                >
                                    where do you work?
                                </label>
                                <div className={styles.control}>
                                    <input
                                        type={"text"}
                                        name={"company"}
                                        id={"company"}
                                        required={true}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div className={[styles.field].join(" ")}>
                                <label
                                    className={[
                                        styles.label,
                                        fieldFocused === "title" ||
                                        (state.title !== undefined &&
                                            state.title !== "")
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"title"}
                                >
                                    what’s your title?
                                </label>
                                <div className={styles.control}>
                                    <input
                                        type={"text"}
                                        name={"title"}
                                        id={"title"}
                                        required={true}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div
                                className={[
                                    styles.field,
                                    styles.textareaField,
                                ].join(" ")}
                            >
                                <label
                                    className={[
                                        styles.label,
                                        fieldFocused === "message" ||
                                        (state.message !== undefined &&
                                            state.message !== "")
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"message"}
                                >
                                    what’s on your mind?
                                </label>
                                <div className={styles.control}>
                                    <textarea
                                        className={styles.reversedColors}
                                        name={"message"}
                                        id={"message"}
                                        required={true}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <button
                                    className={[
                                        styles.button,
                                        styles.reversedColors,
                                    ].join(" ")}
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                        <form
                            className={styles.form}
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div hidden>
                                <label>
                                    Don’t fill this out:{" "}
                                    <input
                                        name="bot-field"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className={[styles.field].join(" ")}>
                                <label
                                    className={[
                                        styles.label,
                                        fieldFocused === "name" ||
                                        (state.name !== undefined &&
                                            state.name !== "")
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"name"}
                                >
                                    what should we call you?
                                </label>
                                <div className={styles.control}>
                                    <input
                                        type={"text"}
                                        name={"name"}
                                        id={"name"}
                                        required={true}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div className={[styles.field].join(" ")}>
                                <label
                                    className={[
                                        styles.label,
                                        fieldFocused === "company" ||
                                        (state.company !== undefined &&
                                            state.company !== "")
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"company"}
                                >
                                    where do you work?
                                </label>
                                <div className={styles.control}>
                                    <input
                                        type={"text"}
                                        name={"company"}
                                        id={"company"}
                                        required={true}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div className={[styles.field].join(" ")}>
                                <label
                                    className={[
                                        styles.label,
                                        fieldFocused === "title" ||
                                        (state.title !== undefined &&
                                            state.title !== "")
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"title"}
                                >
                                    what’s your title?
                                </label>
                                <div className={styles.control}>
                                    <input
                                        type={"text"}
                                        name={"title"}
                                        id={"title"}
                                        required={true}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div
                                className={[
                                    styles.field,
                                    styles.textareaField,
                                ].join(" ")}
                            >
                                <label
                                    className={[
                                        styles.label,
                                        fieldFocused === "message" ||
                                        (state.message !== undefined &&
                                            state.message !== "")
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"message"}
                                >
                                    what’s on your mind?
                                </label>
                                <div className={styles.control}>
                                    <textarea
                                        className={styles.reversedColors}
                                        name={"message"}
                                        id={"message"}
                                        required={true}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <button
                                    className={[
                                        styles.button,
                                        styles.reversedColors,
                                    ].join(" ")}
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
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

export default Index;

/*
<Form>
                            <Field
                                name={"name"}
                                label={"what should we call you?"}
                            />
                            <Field
                                name={"company"}
                                label={"where do you work?"}
                            />
                            <Field
                                name={"title"}
                                label={"what’s your title?"}
                            />
                            <Field
                                name={"message"}
                                label={"what’s on your mind?"}
                                textArea
                            />
                        </Form>
<form
                    name="contact"
                    netlify
                    netlify-honeypot="bot-field"
                    hidden
                >
                    <input type={"text"} name={"name"} />
                    <input type={"text"} name={"company"} />
                    <input type={"text"} name={"title"} />
                    <textarea name={"message"} />
                </form>
*/
