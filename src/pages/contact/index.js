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
                            name="test2"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="test2"
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
                            <input
                                name={"name"}
                                index={"name"}
                                label={"what should we call you?"}
                                fieldFocused={
                                    (state["name"] !== undefined &&
                                        state["name"] !== "") ||
                                    fieldFocused === "name"
                                }
                                handleChange={handleChange}
                                handleFocus={handleFocus}
                                handleUnfocus={handleUnfocus}
                            />
                            <input
                                name={"work"}
                                index={"work"}
                                label={"where do you work?"}
                                fieldFocused={
                                    (state["work"] !== undefined &&
                                        state["work"] !== "") ||
                                    fieldFocused === "work"
                                }
                                handleChange={handleChange}
                                handleFocus={handleFocus}
                                handleUnfocus={handleUnfocus}
                            />
                            <input
                                name={"title"}
                                index={"title"}
                                label={"what’s your title?"}
                                fieldFocused={
                                    (state["title"] !== undefined &&
                                        state["title"] !== "") ||
                                    fieldFocused === "title"
                                }
                                handleChange={handleChange}
                                handleFocus={handleFocus}
                                handleUnfocus={handleUnfocus}
                            />
                            <textarea
                                name={"message"}
                                index={"message"}
                                label={"what’s on your mind?"}
                                fieldFocused={
                                    (state["title"] !== undefined &&
                                        state["title"] !== "") ||
                                    fieldFocused === "title"
                                }
                                handleChange={handleChange}
                                handleFocus={handleFocus}
                                handleUnfocus={handleUnfocus}
                            />
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
/*<Form>
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
                        </Form>*/
