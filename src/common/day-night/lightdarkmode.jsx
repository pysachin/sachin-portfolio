import React, { Component } from 'react';
import styles from "./lightdarkmode.module.css";

class LightDarkMode extends Component {
    render() {
        return (
        <div className={styles.modeContainer}>
            <span className={styles.mode}>
                <i className={` fas fa-sun `}></i>
            </span>   
         </div>
        );
    }
}

export default LightDarkMode;