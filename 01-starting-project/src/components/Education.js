import React from "react";
import classes from "./Education.module.css";

const Education = () => {
    return(
     <div className={classes.education}>
        
        <h4>Vzdelanie</h4>
<p>2016 - 2019 &ensp; Slovenská zdravotnícka univerzita v Bratislave, Fakulta ošetrovateľstva a zdravotníckych odborných štúdií: </p>
<p> &ensp; odbor fyzioterapia (titul Mgr.)</p>
<hr className={classes.hr}></hr>
<p>2012 - 2015 &ensp;Prešovská univerzita v Prešove, Fakulta zdravotníckych odborov: </p>
<p> &ensp; odbor fyzioterapia (titul Bc.)</p>
     </div>
    );
}
export default Education;