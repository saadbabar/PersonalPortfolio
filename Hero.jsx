import React from 'react';

import styles from "./Hero.module.css";
import{ getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Saad</h1>
            <p className={styles.description}>I am a Computer Science student at the 
            Univeristy of Michigan seeking SWE intern roles
            </p>
            <a href="mailto:saadmb@umich.edu" className={styles.contactBtn}>
                 Contact Me
            </a>
        </div>
        <img 
        src={getImageUrl("hero/me2.png")}
        alt="Hero image of me" 
        className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
}