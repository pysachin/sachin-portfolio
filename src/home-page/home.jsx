import React, { Component } from 'react';
import styles from "./home.module.css";
import AppButtonLight from '../common/button-design/appButtonLight';
import { gsap } from 'gsap';
import logo from '../images/mec.jpg';
import About from '../about-page/about';

class Home extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.hero = null;
        this.btnKnowMore = null;
        // reference to the animation
        this.myTween = null;
    }

    componentDidMount(){
        // use the node ref to create the animation
        const TLAnimateHero = gsap.timeline();       
        TLAnimateHero.from(this.hero, { autoAlpha: 0, y: -50, delay: 0.2 });
    }

    render() {
        return (         
            <div>
                 <div id="hero" className={styles.heroContainer} >                    
                    <div className={styles.heroContainerTitle} ref={div => this.hero = div}>
                        <img src={logo}  
                        style={{ display:"revert",borderRadius:'50%', width:'100px', height:'100px' ,marginRight:'10px'}} 
                        />
                        <h1 className={styles.heroTitle}>
                            Hi, my name is <span className="text-color-main">Sachin Kumar</span>
                        </h1>
                        <h1 className={styles.heroTitle2}> I'm the Software Developer. </h1>    
                        
                    </div>
                    <AppButtonLight btnName="Know more" btnHref="#about"></AppButtonLight>                                                
                   
                </div>
                <About></About>
            </div>       
        );
    }
}

export default Home;