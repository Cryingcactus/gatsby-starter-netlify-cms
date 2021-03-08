import React, { useState } from "react";
import Layout from "../../components/Layout";
import styles from "./Contact.module.css";
import Form from "./Form";
import Field from "./Field";

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

const Index = () => {
    return (
        <Layout>
            <section className="contact">
                <div className={styles.container}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.header}>let's get tgthr.</h1>
                    </div>
                    <div className={styles.formContainer}>
                        <Form>
                            <Field
                                index={"name"}
                                label={"what should we call you?"}
                            />
                            <Field
                                index={"work"}
                                label={"where do you work?"}
                            />
                            <Field
                                index={"title"}
                                label={"what’s your title?"}
                            />
                            <Field
                                index={"message"}
                                label={"what’s on your mind?"}
                                textArea
                            />
                        </Form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Index;

/*
<form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript /}
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
                            <div className={styles.field}>
                                <label
                                    className={[
                                        styles.label,
                                        state.name || focusedField === "name"
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"name"}
                                >
                                    what should we call you?
                                </label>
                                <div className={styles.control}>
                                    <input
                                        className="input"
                                        type={"text"}
                                        name={"name"}
                                        onChange={handleChange}
                                        id={"name"}
                                        required={true}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <label
                                    className={[
                                        styles.label,
                                        state.email
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"email"}
                                >
                                    Email
                                </label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type={"email"}
                                        name={"email"}
                                        onChange={handleChange}
                                        id={"email"}
                                        required={true}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <label
                                    className={[
                                        styles.label,
                                        state.message
                                            ? styles.fieldTitle
                                            : styles.placeholder,
                                    ].join(" ")}
                                    htmlFor={"message"}
                                >
                                    Message
                                </label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        name={"message"}
                                        onChange={handleChange}
                                        id={"message"}
                                        required={true}
                                        onFocus={handleFocus}
                                        onBlur={handleUnfocus}
                                    />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <button
                                    className="button is-link"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
*/
