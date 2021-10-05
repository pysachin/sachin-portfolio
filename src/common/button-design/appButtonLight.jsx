import React, { Component } from 'react';
import style from './appButtonLight.module.css';
import { gsap } from 'gsap';


class AppButtonLight extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node        
        this.btnKnowMore = null;       
    }

    componentDidMount(){
        // use the node ref to create the animation
        const TLAnimateHero = gsap.timeline();       
        TLAnimateHero.from(
            this.btnKnowMore,
            { autoAlpha: 0, y: -50, ease: "bounce.out", delay: 0.2 },
            "-=0.3"
          );
    }

    render() {
        const { btnName,btnHref} = this.props;
        return (           
            <div ref={div => this.btnKnowMore = div}>
             <p className={style.heroCta}>
                 <a className={`${style.ctaBtn} ${style.ctaBtnHero}`} href={btnHref}>{btnName}</a>
              </p>
            </div>
        );
    }
}

export default AppButtonLight;