import React, { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";

import classes from "./UI/App.module.css";
import PostHeader from "./components/PostHeader";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";

const App = (props) => {
  const AnchorAbout = useRef(null);
  const AnchorSkills = useRef(null);
  const AnchorWorkexp = useRef(null);

  const scrollToAbout = () => {
    AnchorAbout.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    AnchorSkills.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorkexp = () => {
    AnchorWorkexp.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <React.Fragment>
      <div id={classes.navigation}>
        <Header onScrollAbout={scrollToAbout} onScrollSkills={scrollToSkills} onScrollWorkexp={scrollToWorkexp} />
      </div>
      <PostHeader />
      <div ref={AnchorAbout} id={classes.sectionAbout}>
        <About />
      </div>

      <div ref={AnchorSkills} id={classes.sectionSkills}>
        <Skills />
      </div>
      <div>
      <WorkExp/>
      </div>
    </React.Fragment>
  );
};

export default App;
