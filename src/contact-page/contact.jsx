import React, { Component } from 'react';
import style from './contact.module.css';

class Contact extends Component {
    render() {
        return (
            <div className={style.main}>
                <p style={{margin:"5px"}}><i class="fas fa-phone-square"></i>  9013357025</p>
                <p style={{margin:"5px"}}><i class="fas fa-envelope-square"></i>  143chauhansachin@gmail.com</p>
                <p> <i class="fab fa-github"></i> https://github.com/pysachin </p>
                <p> <i class="fab fa-linkedin"></i> https://www.linkedin.com/in/sachin-kumar-a2631b147 </p>                       
                <p style={{margin:"5px"}}><i class="fas fas fa-globe"></i>  www.xyz.com</p>            
                <p style={{margin:"5px"}}><i class="fas fa-map-marker-alt"></i>  Delhi, India</p> 
            </div>
        );
    }
}

export default Contact;