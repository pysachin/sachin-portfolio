import React, { Component } from 'react';
import styles from './resume.module.css'
import logo from '../images/mec.jpg';
class Resume extends Component {
    render() {
        return (
            <div className={styles.resumeMain}>
                <div className={styles.resumeDiv}>
                   
                   <div className={styles.resumeDiv_Header}>
                       <div className={styles.resumeDiv_Header_Left}>
                            <p className={styles.resumeDiv_Header_P1}>Sachin Kumar</p>
                            <p className={styles.resumeDiv_Header_P2}>Senior Software Engineer</p>
                       </div>                        
                       <div className={styles.resumeDiv_Header_Right}>
                           <div>
                                <p style={{margin:"5px"}}><i class="fas fa-phone-square"></i>  9013357025</p>
                                <p style={{margin:"5px"}}><i class="fas fa-envelope-square"></i>  143chauhansachin@gmail.com</p>
                                <p style={{margin:"5px"}}><i class="fas fas fa-globe"></i>  https://sachincode.herokuapp.com/</p>            
                                <p style={{margin:"5px"}}><i class="fas fa-map-marker-alt"></i>  Delhi, India</p>                                            
                           </div>
                       </div>
                   </div>
                   <div  className={styles.resumeDiv_Intro}>
                       <div  className={styles.resumeDiv_Intro_Left}>
                       <img src={logo}  
                        style={{ display:"revert",borderRadius:'50%', width:'100px', height:'100px' ,marginRight:'10px'}} 
                        />
                       </div>       
                       <div  className={styles.resumeDiv_Intro_Right}>
                            <p>                
                                I'm a software engineer specialised in frontend and backend development for 
                                scalable web apps & desktop app .
                            </p>
                            <p>
                            I have more than 6 years' experience building software for manufacturing client.
                            Current I am working with MothersonSumi INfotech & Designs Limited (MIND).
                            </p>            
                       </div>                 
                   </div>
                   <div className={styles.resumeDiv_Wrk}>
                         <div className={styles.resumeDiv_Wrk_01}>
                                <p className={styles.resumeDiv_Wrk_01_P1}>WORK EXPERIENCES</p>
                                <p style={{margin:"0px"}}>MothersonSumi InfoTech and Designs Ltd</p>
                                <p  className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>15th Jul 2015 to Present</p>
                                <p  className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Senior Software Engineer</p>
                        </div>
                        <div className={styles.resumeDiv_Wrk_02}>
                            <ul>
                                <li>Key role in the development of .Net Desktop and Angular Web applications.</li>
                                <li>Code quality monitoring role to ensure code is highly optimised, readable and maintainable.</li>
                                <li>Work extensively on .Net Desktop / Angular Web Apps with extensive use of SQL server.</li>
                                <li>Worked closely with Database Admin to optimise procedures and performance of SQL queries and Procedure.</li>
                                <li>Worked with Team for Automation and manual testing, along with initial Unit testing at self-end.</li>
                                <li>Discussions with Client like TVS (TEL and BIL) to fine tune and optimise the product/ Project.</li>
                                <li>Maintain day to day agility regarding development and other phases of project with senior team members.</li>
                                <li>Use of TFS - Team Foundation Server as main repository.</li>
                                <li>Use of SQL profiler, Crystal Report and other SQL tools comes in handy.</li>
                                <li>Using TFS (Team Foundation Server) & GIT for Version control.</li>
                            </ul>                        
                        </div>
                   </div>
                   <div className={styles.resumeDiv_Skl}>
                        <div className={styles.resumeDiv_Skl_01}>
                                <p className={styles.resumeDiv_Wrk_01_P1}>SKILLS</p>   
                                <ul>
                                    <li>JavaScript/Angular/React</li>
                                    <li>.NET C# WEB API</li>
                                    <li>.NET C# WinForm/WPF</li>
                                    <li>HTML/CSS</li>
                                    <li>Object-oriented design</li>                                    
                                    <li>Microsoft SQL Server</li>
                                    <li>Effective communication</li>
                                    <li>Team player</li>
                                    <li>Good time management</li>
                                </ul>                             
                        </div>
                   </div>
                   <div className={styles.resumeDiv_Skl}>
                        <div className={styles.resumeDiv_Skl_01}>
                                <p className={styles.resumeDiv_Wrk_01_P1}>EDUCATION</p>   
                                <p style={{marginBottom:"0px"}}> B. Tech Computer Science</p>                          
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Norther India Engineering College, Delhi</p>
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>2015</p>

                                <p style={{marginBottom:"0px"}}>Diploma Computer Science</p>                          
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Ambedakar Polytechnic, Delhi</p>
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>2012</p>
                        </div>
                   </div>
                   <div className={styles.resumeDiv_Skl}>
                        <div className={styles.resumeDiv_Skl_01}>
                                <p className={styles.resumeDiv_Wrk_01_P1}>PROJECTS</p>   
                                <p style={{marginBottom:"0px"}}>TS (Traceability System) – Desktop Application BIL</p>                          
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Role: Developer</p>
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Frontend: C# .NET Winform</p>
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Backend: Microsoft SQL Server</p>                                
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Client: BIL</p>

                                <p style={{marginBottom:"0px"}}>TS (Traceability System) – Desktop Application TEL</p>                          
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Role: Developer</p>
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Frontend: C# .NET WPF</p>
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Backend: Microsoft SQL Server</p>                                
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Client: BIL</p>

                                <p style={{marginBottom:"0px"}}>TS(Traceability System) – Web Application </p>                          
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Role: Developer</p>
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Frontend: Angular</p>
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Backend: C# .NET Web API  Microsoft SQL Server</p>                                
                                <p className={styles.resumeDiv_Wrk_01_P2} style={{margin:"0px"}}>Client: BIL\TEL\MSIL</p>

                        </div>
                   </div>
                   <div className={styles.resumeDiv_Skl}>
                        <div className={styles.resumeDiv_Skl_01}>
                                <p className={styles.resumeDiv_Wrk_01_P1}>LANGUAGES</p>   
                                <p style={{marginBottom:"0px"}}>Hindi</p>
                                <p style={{marginBottom:"0px"}}>English</p>
                        </div>
                   </div>
                   <div className={styles.resumeDiv_Skl}>
                        <div className={styles.resumeDiv_Skl_01}>
                                <p className={styles.resumeDiv_Wrk_01_P1}>INTERESTS</p>   
                                <p style={{marginBottom:"0px"}}>Yoga</p>
                                <p style={{marginBottom:"0px"}}>Gym</p>
                                <p style={{marginBottom:"0px"}}>Gaming</p>
                        </div>
                   </div>
                </div>
            </div>            
        );
    }
}

export default Resume;