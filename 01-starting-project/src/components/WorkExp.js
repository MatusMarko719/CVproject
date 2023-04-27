import React from "react";
import classes from "./WorkExp.module.css";

const WorkExp = () => {
const lightx1 = `${classes.light} ${classes.x1}`;
const lightx2 = `${classes.light} ${classes.x2}`;
const lightx3 = `${classes.light} ${classes.x3}`;
const lightx4 = `${classes.light} ${classes.x4}`;
const lightx5 = `${classes.light} ${classes.x5}`;
const lightx6 = `${classes.light} ${classes.x6}`;
const lightx7 = `${classes.light} ${classes.x7}`;
const lightx8 = `${classes.light} ${classes.x8}`;
const lightx9 = `${classes.light} ${classes.x9}`;

  return (
    <div className={classes.workexp}>
        <h4 id={classes.headline4}>Pracovné skúsenosti</h4>
      <div className={classes.leram}>
        <p className={classes.subhead}>3/2021-12/2022 LERAM pharmaceuticals</p>
        <p className={classes.position}>Key account manager</p>
        <ul>
          <li>Zodpovednosť za produktové portfólio</li>
          <li>Prezentácia produktov na odborných seminároch a kongresoch</li>
          <li>Odborné a klinické produktové poradenstvo pre klientov</li>
          <li>Predajné a marketingové aktivity</li>
          <li>Vytváranie a rozvíjanie dobrých vzťahov s klientmi</li>
        </ul>
      </div>
      <div className={classes.leram}>
        <p className={classes.subhead}>
          1/2019-2/2021 BTL zdravotnícka technika ČR{" "}
        </p>
        <p className={classes.position}>Produktový a klinický špecialista</p>
        <ul>
          <li>Predajné, marketingové a klinické aktivity po celej ČR</li>
          <li>Pravidelná komunikácia so zahraničnými partnermi</li>
          <li>Distribúcia zdravotníckej techniky</li>
          <li>Vedenie odborných seminárov</li>
          <li>
            Odborné technické, klinické a produktové poradenstvo pre zákazníkov
          </li>
          <li>Prezentácia produktov u potenciálnych klientov</li>
          <li>Akvizície nových zákazníkov</li>
        </ul>
      </div>
      <div className={classes.leram}>
        <p className={classes.subhead}>
          7/2017-12/2018 Rehabilitace Kosmická Praha ČR{" "}
        </p>
        <p className={classes.position}>Fyzioterapeut</p>
      </div>
      <div className={classes.leram}>
        <p className={classes.subhead}>
          6/2015-12/2017 Vojenský rehabilitačný ústav ČR{" "}
        </p>
        <p className={classes.position}>Fyzioterapeut</p>
      </div>
    </div>
  );
};
export default WorkExp;
