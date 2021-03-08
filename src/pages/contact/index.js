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
                            <Field name={"work"} label={"where do you work?"} />
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
