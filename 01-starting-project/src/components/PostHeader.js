import React from "react";
import foto2 from "../foto/foto2.jpg";
import classes from "../components/PostHeader.module.css";


const PostHeader = () => {
  return (
    <>
      <div className={classes.imageHolder}>
        <div className={classes.foto}>
          <img src={foto2} alt="" />
        </div>
        <button className={classes.button}>
        <a href="https://ozcharbel.sk/Vyhlasenie_o_poukazani_podielu_zaplatenej_dane_z_prijmov_fyzickej_osoby.pdf" target="blank">Zobraziť CV (.pdf)</a>
        </button>
      </div>
    </>
  );
};
export default PostHeader;
