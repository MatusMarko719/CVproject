import React, { useRef, useEffect } from "react";
import foto2 from "../foto/foto2.jpg";
import classes from "../components/PostHeader.module.css";
import git from "../foto/git.png";

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
        <a
          id={classes.git}
          href="https://github.com/MatusMarko719?tab=repositories"
          target="blank"
        >
          <img src={git} alt="" title="môj kód" />
        </a>
        <button className={classes.button}>
          <a
            href="https://ozcharbel.sk/Vyhlasenie_o_poukazani_podielu_zaplatenej_dane_z_prijmov_fyzickej_osoby.pdf"
            target="blank"
          >
            Zobraziť CV (.pdf)
          </a>
        </button>
      </div>
    </>
  );
};
export default PostHeader;
