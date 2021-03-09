import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/404.module.css";

const NotFoundPage = () => (
    <Layout>
        <section className="section">
            <div className={styles.container}>
                <h1 className={styles.header}>whoops.</h1>
                <p className={styles.copy}>
                    we may be lost. let’s try that again, shall we?
                </p>
            </div>
        </section>
    </Layout>
);

export default NotFoundPage;
