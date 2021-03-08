import React, { useState } from "react";
import Layout from "../../components/Layout";
import styles from "./Contact.module.css";
import Form from "./Form";
import Field from "./Field";

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
