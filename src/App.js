import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./home-page/home";
import Resume from "./resume-page/resume";
import NavBar from "../src/nav-bar/navbar";
import Contact from "./contact-page/contact";
import Project from "./project-page/project";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        {/* <Home></Home>
        <About></About> */}
        <div>
          <Switch>
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
