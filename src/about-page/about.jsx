import React, { Component } from 'react';
import style from './about.module.css';
import AppButtonLightTwo from '../common/button-design/appButtonLightTwo';
import me from '../images/merbg.png';

class About extends Component {
    render() {
        return (
<div>
    <section id="about" className={style.about}>
      <div className="container">
        <h2 className={style.sectionTitle}>About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-4 col-sm-12">
            <div className={style.aboutWrapperImage}>
              <img
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={me}
                alt="Profile Image"
              />        
              <p>
                Hi, my name is Sachin Kumar and I'm a senior software engineer. Welcome to my personal website!
              </p>      
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className={style.aboutWrapperInfo}>
              <p className={style.aboutWrapperInfoText}>                
                I'm a software engineer specialised in frontend and backend development for 
                scalable web apps & desktop app .
              </p>
              <p className={style.aboutWrapperInfoText}>
               I have more than 6 years' experience building software for manufacturing client.
               Current I am working with MothersonSumi INfotech & Designs Limited (MIND).
               </p>
               <p className={style.aboutWrapperInfoText}>
               If you want to check out my latest work, you can see everything I do 
               on my GitHub.
               When I'm not developing, I like doing yoga, gym, or mobile game.
               </p>
               <p className={style.aboutWrapperInfoText}>
                  <h3>Technical skill sets and technologies I use.</h3>
                  <span style={{margin:"5px"}}><i class="fab fa-js-square" style={{color: "yellow",marginRight:"5px"}}></i> JavaScript</span>
                  <span style={{margin:"5px"}}><i  class="fab fa-angular" style={{color: "red",marginRight:"5px"}}></i> Angular</span>
                  <span style={{margin:"5px"}}><i  class="fab fa-react" style={{color: "dodgerblue",marginRight:"5px"}}></i> React</span>
                  <span style={{margin:"5px"}}><i  class="fab fa-node-js" style={{color: "green",marginRight:"5px"}}></i> Node</span>                  
                  <span style={{margin:"5px"}}><i  class="fab fa-html5" style={{color: "orange",marginRight:"5px"}}></i> HTML & CSS</span>                  
               </p>
               <p className={style.aboutWrapperInfoText}>                                    
                  <span style={{margin:"5px"}}><i  class="fab fa-microsoft" style={{color: "dodgerblue",marginRight:"5px"}}></i> C# .NET API</span>                  
               </p>       
               <p className={style.aboutWrapperInfoText}>                                    
                  <span style={{margin:"5px"}}><i  class="fas fa-database" style={{color: "yellow",marginRight:"5px"}}></i> Microsoft SQL Server</span>                                    
               </p>   
               <p className={style.aboutWrapperInfoText}>                                    
                  <span style={{margin:"5px"}}><i  class="fas fa-desktop" style={{color: "dodgerblue",marginRight:"5px"}}></i> C# .NET WinForms & WPF </span>                                    
               </p>                              
               <p className={style.aboutWrapperInfoText}>
               I'm interested in developing web application using angular or react js.
               </p>
               <div style={{display:"flex", flexDirection:"row",justifyContent:"center"}}> 
                <a style={{marginRight:"20px",cursor:"pointer",fontSize:"4rem"}} href="https://github.com/pysachin" target="_blank" ><i class="fab fa-github"></i></a>               
                <a style={{marginRight:"20px",cursor:"pointer",fontSize:"4rem"}} href="https://www.linkedin.com/in/sachin-kumar-a2631b147" target="_blank" ><i class="fab fa-linkedin"></i></a>    
               </div>               
            </div>
          </div>
        </div>
      </div>
    </section> 
    
</div>
        );
    }
}

export default About;