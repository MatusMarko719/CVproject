import React, { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";

import classes from "./UI/App.module.css";
import PostHeader from "./components/PostHeader";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";
import Education from "./components/Education";
import Contacts from "./components/Contacts";

const App = (props) => {
  const AnchorAbout = useRef(null);
  const AnchorSkills = useRef(null);
  const AnchorWorkexp = useRef(null);
  const AnchorEducation = useRef(null);
  const AnchorContacts = useRef(null);

  const scrollToAbout = () => {
    AnchorAbout.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    AnchorSkills.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWorkexp = () => {
    AnchorWorkexp.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEducation = () => {
    AnchorEducation.current.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToContacts = () => {
    AnchorContacts.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <React.Fragment>
      <div id={classes.navigation}>
        <Header
          onScrollAbout={scrollToAbout}
          onScrollSkills={scrollToSkills}
          onScrollWorkexp={scrollToWorkexp}
          onScrollEducation={scrollToEducation}
          onScrollContacts={scrollToContacts}
        />
      </div >
      <div id={classes.sectionPostHeader}>
      <PostHeader />
      </div>
      <div ref={AnchorAbout} id={classes.sectionAbout}>
        <About />
      </div>

      <div ref={AnchorSkills} id={classes.sectionSkills}>
        <Skills />
      </div>
      <div ref={AnchorWorkexp} id={classes.sectionWorkexp}>
        <WorkExp />
      </div>
      <div ref={AnchorEducation} id={classes.sectionEducation}>
      <Education />
      </div>
      <div ref={AnchorContacts} id={classes.sectionContacts}>
      <Contacts/>
      </div>
      
    </React.Fragment>
  );
};

export default App;
