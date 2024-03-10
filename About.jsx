import React from 'react';

import styles from "./About.module.css"
import { getImageUrl } from "../../utils";


export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}> 
        <img 
        src={getImageUrl("about/aboutImage.png")} 
        alt ="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Education</h3>
                    <p>University of Michigan - Ann Arbor, Bachelor's in Computer Science</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Coursework</h3>
                    <p>Data Structures & Algorithms, Computer Organization, Programming Languages</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Career Interests</h3>
                    <p>Software Engineering and Business Management</p>
                </div>
            </li>
        </ul>
        </div>
    </section>;
};

