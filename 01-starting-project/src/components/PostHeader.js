import React, { useRef, useEffect } from "react";
import foto2 from "../foto/foto2.jpg";
import classes from "../components/PostHeader.module.css";
import git from "../foto/git.png";
import zivotopis from "../foto/CV.pdf";
import linn from "../foto/linkedin.png";

const PostHeader = () => {
  return (
    <>
      <div className={classes.imageHolder}>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div className={classes.foto}>
          <img src={foto2} alt="" />
        </div>
        <div className={classes.icones}>
        <a
          id={classes.git}
          href="https://github.com/MatusMarko719?tab=repositories"
          target="blank"
        >
          <img src={git} alt="" title="môj kód" />
        </a>
        <a
          href="https://www.linkedin.com/in/mat%C3%BA%C5%A1-marko/"
          target="blank"
          id={classes.linn}
        >
          <img src={linn} alt="" />
        </a>
        </div>
        <a href={zivotopis} target="blank">
        <button className={classes.button}>
         
            Zobraziť CV (.pdf)
         
        </button>
        </a>
      </div>
    </>
  );
};
export default PostHeader;
