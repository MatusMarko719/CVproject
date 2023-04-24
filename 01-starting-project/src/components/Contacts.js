import React from "react";
import classes from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={classes.contacts}>
    
      <h4>Kontakt</h4>
      <ul>
        <li>
          <span className={classes.first}> Meno:</span>
          <span className={classes.second}> Matúš Marko</span>
        </li>
        <li>
          <span className={classes.first}>&ensp; Vek: &ensp;</span>
          <span>&ensp; 30 &ensp;</span>
        </li>
        <li>
          <span className={classes.first}> Bydlisko:</span>
          <span> Žilina Slovensko</span>
        </li>
      
        <li>
          <span className={classes.first}> Telefón:</span>
          <span>
            
            <a href="callto:+421915542719">0915 542 719</a>
          </span>
        </li>
        <li>
          <span className={classes.first}> e-mail:</span>
          <span>
            
            <a href="mailto:mmarko.matus@gmail.com">mmarko.matus@gmail.com</a>
          </span>
        </li>
      </ul>
      
      <div className={classes.web}>
      <hr className={classes.hr}></hr>
        <span className={classes.last}> Web:</span> <br></br>
        <span>
          
          <a href="http://matusmarko.sk/" target="blank">
            www.matusmarko.sk
          </a>
        </span>
      </div>
    </div>
  );
};
export default Contacts;
