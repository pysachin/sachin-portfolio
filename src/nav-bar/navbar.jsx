import React, { Component } from 'react';
import styles from './navbar.module.css'
import { gsap } from 'gsap';
import {  NavLink } from 'react-router-dom';

class NavBar extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.aninamteNav = null;
        this.myTween = null;
    }


    componentDidMount(){
        // use the node ref to create the animation
        const TLAnimateHero = gsap.timeline();       
        TLAnimateHero.from(this.aninamteNav, { autoAlpha: 0, y: -100, ease: "bounce.out", delay: 0.2 });
    }

    render() {
       
        return (
            
        <nav className={styles._nav} ref={div => this.aninamteNav = div}>
            <NavLink className={`${styles.navAchor} ${styles.styleUINavDiv} `} to="/">
            <i style={{margin:'5px'}} className="fas fa-user-tie"></i>About Me
            </NavLink>
            <NavLink className={`${styles.navAchor} ${styles.styleUINavDiv} `} to="/project">
            <i style={{margin:'5px'}} className="fas fa-laptop-code"></i>Projects
            </NavLink>
            <NavLink className={`${styles.navAchor} ${styles.styleUINavDiv} `} to="/resume">
            <i style={{margin:'5px'}} className="fas fa-file-contract"></i>Resume
            </NavLink>                        
            <NavLink className={`${styles.navAchor} ${styles.styleUINavDiv} `} to="/contact">
                <i style={{margin:'5px'}} className="fas fa-id-card"></i>Contact
            </NavLink>        
        </nav>
        );   
    }

    
}

export default NavBar;