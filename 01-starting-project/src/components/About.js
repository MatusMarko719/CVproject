import React from "react";
import classes from "./About.module.css";
import foto1 from "../foto/foto1.jpg";

const About = () => {
  return (
    <div className={classes.article}>
      <h4>Trochu o mne...</h4>

      <div className={classes.container}>
        <div className={classes.image}>
          <img src={foto1} alt="" id={classes.foto1} />
        </div>
        <div className={classes.text}>
          <p>
          Dobrý deň, volám sa Matúš Marko. Už dlhšiu dobu ma láka svet IT a napriek tomu, že som vyštudovaný fyzioterapeut, som sa zhruba v polovici roku 2022 rozhodol pre rázny krok v mojom profesionálnom živote.
          </p>
          <p>
          Postupne som ukončil spoluprácu s firmami, pre ktoré som dovtedy pracoval a začal sa naplno vzdelávať v oblasti IT. Aj vďaka mojim priateľom informatikom som sa postupne naučil základy programovania a odkedy som sa s touto oblasťou prvýkrát zoznámil, neprestáva ma baviť, ako môže byť samotné tvorenie pomocou kódu fascinujúce.
          </p>
          <p>
            
            Aj keď som momentálne bez pracovných záväzkov, čo mi dáva výhodu
            naplno sa venovať učeniu nových technológii, prirodzene narážam na
            limity samovzdelávania. Preto hľadám a som pripravený využiť každú
            príležitosť pre nováčikov, aby som mohol zlepšovať svoje zručnosti a
            získavať skúsenosti v praxi na reálnych projektoch.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
