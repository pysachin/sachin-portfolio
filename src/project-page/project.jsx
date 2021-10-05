import React from 'react';
import AppButtonLightTwo from '../common/button-design/appButtonLightTwo';
import styles from './project.module.css'

function project(props) {
    return (
        <div className={styles.projectMain}>
                    <div className={styles.projectIntro}>
                        <h1>Love Bites Dating App</h1>
                        <p>
                        This one is web application used to connect people all over the globe, in 
                        this app user can create their personal profile , secure & encrypted 
                        password policy. In this application user can upload photos, like profile , 
                        check online user and live chat etc...
                        </p>
                        <p>
                            <i  class="fab fa-angular" style={{color: "red",marginRight:"5px"}}> Angular</i> 
                            <i  class="fab fa-microsoft" style={{color: "dodgerblue",marginRight:"5px"}}> C# .Net (5) API</i>
                            <i  class="fas fa-database" style={{color: "#336690",marginRight:"5px"}}> PostgreSQL</i>  
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="See Live" btnHref="https://lovebitesapp.herokuapp.com/"></AppButtonLightTwo>   
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/Prj_01_Dating_App.git"></AppButtonLightTwo>   
                        </div>
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>Video Rental App</h1>
                        <p>
                        Demo application to show the list of available movies for rent, only admin user can add\update\delete movies from database 
                        and guest user can check out the list of available movies.   
                        </p>
                        <p>
                            <i  class="fab fa-react" style={{color: "dodgerblue",marginRight:"5px"}}> React</i>  
                            <i  class="fab fa-node-js" style={{color: "green",marginRight:"5px"}}> Node JS</i>
                            <i  class="fas fa-database" style={{color: "green",marginRight:"5px"}}> Mongodb</i>  
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="See Live" btnHref="https://dry-shore-85383.herokuapp.com/movies"></AppButtonLightTwo>   
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/vidlyclient.git"></AppButtonLightTwo>   
                        </div>
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>Shopping Cart</h1>
                        <p>
                            This application contain sample code to understand how we can create microservice 
                            using redis\sql server\pgSql database. added docker support in this app. 
                        </p>
                        <p>
                            <i  class="fab fa-microsoft" style={{color: "dodgerblue",marginRight:"5px"}}> C# .Net (5) API</i>
                            <i  class="fas fa-database" style={{color: "crimson",marginRight:"5px"}}> Redis</i>
                            <i  class="fas fa-database" style={{color: "#F0A721",marginRight:"5px"}}> MS SQL Server</i>
                            <i  class="fas fa-database" style={{color: "#336690",marginRight:"5px"}}> PostgreSQL</i>
                            <i  class="fab fa-docker" style={{color: "dodgerblue",marginRight:"5px"}}> Docker</i>
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/Prj_02_Shopping_Cart.git"></AppButtonLightTwo>   
                        </div>
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>Joke App</h1>
                        <p>
                            This application refreshes your mind with humors jokes. let check it out.
                        </p>
                        <p>
                            <i  class="fab fa-js-square" style={{color: "#F0A721",marginRight:"5px"}}> JavaScript</i>
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="See Live" btnHref="https://pysachin.github.io/joke-app/"></AppButtonLightTwo>   
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/joke-app.git"></AppButtonLightTwo>   
                        </div>
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>Day Night Them</h1>
                        <p>
                            This one is sample code to apply day-night them in web application.
                        </p>
                        <p>
                            <i  class="fab fa-js-square" style={{color: "#F0A721",marginRight:"5px"}}> JavaScript</i>
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="See Live" btnHref="https://pysachin.github.io/simple-daynight-them/"></AppButtonLightTwo>   
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/simple-daynight-them.git"></AppButtonLightTwo>   
                        </div>
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>Read Quotes</h1>
                        <p>
                            This application used to write quotes for your twitter profile.
                        </p>
                        <p>
                            <i  class="fab fa-js-square" style={{color: "#F0A721",marginRight:"5px"}}> JavaScript</i>
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="See Live" btnHref="https://pysachin.github.io/read-quote/"></AppButtonLightTwo>   
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/read-quote.git"></AppButtonLightTwo>   
                        </div>
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>Bookmark Me</h1>
                        <p>
                            This application used to bookmark your favorite sites.
                        </p>
                        <p>
                            <i  class="fab fa-js-square" style={{color: "#F0A721",marginRight:"5px"}}> JavaScript</i>
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="See Live" btnHref="https://pysachin.github.io/add-bookmark/"></AppButtonLightTwo>   
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/add-bookmark.git"></AppButtonLightTwo>   
                        </div>
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>Scroll Animation Them</h1>
                        <p>
                            This one is sample code to apply scroll animation in web application.
                        </p>
                        <p>
                            <i  class="fab fa-js-square" style={{color: "#F0A721",marginRight:"5px"}}> JavaScript</i>
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="See Live" btnHref="https://pysachin.github.io/simple-scroll-animation/"></AppButtonLightTwo>   
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/add-bookmark.git"></AppButtonLightTwo>   
                        </div>
                    </div>
                    <div className={styles.projectIntro}>
                        <h1>Javascript Projects</h1>
                        <p>
                            This one is sample code to learn javascript basics.
                        </p>
                        <p>
                            <i  class="fab fa-js-square" style={{color: "#F0A721",marginRight:"5px"}}> JavaScript</i>
                        </p>
                        <div className={styles.btnContainer}>
                            <AppButtonLightTwo btnName="See Live" btnHref=" https://pysachin.github.io/JSProjectExample/"></AppButtonLightTwo>   
                            <AppButtonLightTwo btnName="Source Code" btnHref="https://github.com/pysachin/JSProjectExample.git"></AppButtonLightTwo>   
                        </div>
                    </div>
            </div>
    );
}

export default project;