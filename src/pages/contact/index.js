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
                    </div>
                </div>
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
<form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
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
                            <div className="field">
                                <label className="label" htmlFor={"name"}>
                                    what should we call you?
                                </label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type={"text"}
                                        name={"name"}
                                        onChange={handleChange}
                                        id={"name"}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" htmlFor={"compnay"}>
                                    where do you work?
                                </label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type={"text"}
                                        name={"compnay"}
                                        onChange={handleChange}
                                        id={"compnay"}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" htmlFor={"title"}>
                                    what’s your title?
                                </label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type={"text"}
                                        name={"title"}
                                        onChange={handleChange}
                                        id={"title"}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label" htmlFor={"message"}>
                                    what’s on your mind?
                                </label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        name={"message"}
                                        onChange={handleChange}
                                        id={"message"}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <button
                                    className="button is-link"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
*/
