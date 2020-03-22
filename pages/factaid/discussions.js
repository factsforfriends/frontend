import React from "react";
import "../../static/index.css";
import styled from "styled-components";
import Link from "next/link";

const H2 = styled.h2`
  font-size: 2.25rem;
  transform: translateX(-0.15rem);
`;

const H3 = styled.h3`
  font-size: 1.75rem;
  transform: translateX(-0.15rem);
  margin-top: 15px;
`;

const H5 = styled.h5`
  font-size: 1.25rem;
  transform: translateX(-0.15rem);
  margin-top: 15px;
`;

const P = styled.p`
  margin-top: 15px;
`;

const Discussions = () => (
  <>
    <H3 id="tipps-diskussion">
      Tipps und Anregungen für die Diskussion mit anderen
    </H3>
    <p>
      Stell dir vor, du teilst (aus Versehen) eine Falschnachricht und bist
      überzeugt davon, dass sie richtig ist. Wie möchtest du, dass man dich
      darauf anspricht? Mit Respekt? Ganz sachlich oder mit Humor? Mach es genau
      so, wie du es selbst gern hättest!
    </p>
    <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
      <li style={{ paddingTop: "15px" }}>
        Stelle sicher, dass die Person gerade bereit ist, überhaupt mit dir
        darüber zu sprechen. Wer todmüde ist oder gleich zur Arbeit muss, möchte
        vermutlich gerade kein längeres und vielleicht anstrengendes Gespräch
        führen.
      </li>
      <li style={{ paddingTop: "15px" }}>
        Stelle sicher, dass die andere Person weiß, wovon du genau sprichst.
        Statt das Gespräch mit einer Anschuldigung zu beginnen (“immer teilst du
        solche Fake-News”) ist es besser eine gemeinsame Gesprächsbasis
        herzustellen, über die ihr euch beide einig seid. Etwa indem Du das
        Gespräch beginnst mit “gestern hast du diesen Bericht über xy geteilt”.
      </li>
      <li style={{ paddingTop: "15px" }}>
        Erkläre der Person, warum es dir wichtig ist, eine falsche Nachricht zu
        korrigieren. Sprich dabei über dich selbst, also was es in dir auslöst
        und was du brauchst oder dir wünschst. Zum Beispiel: “Ich habe die
        Sorge, dass Menschen, die das lesen, leichtsinnig werden und es dadurch
        zu Ausgangssperren für alle kommt.” Oder: “Ich bin genervt, weil mir
        wichtig ist, Rücksicht zu nehmen.”
      </li>
      <li style={{ paddingTop: "15px" }}>
        Sage der Person, was du jetzt gerne hättest - und versuche das als
        Angebot zu sehen. Du könntest zum Beispiel vorschlagen: “Ich würde dir
        gern eine App zeigen, die dabei hilft, zu unterscheiden, welche
        Informationen zuverlässig sind. Möchtest du das?” Oder erkundige dich
        danach, was deine Äußerung bewirkt hat, indem Du fragst: “Wie geht es
        dir damit wenn du das hörst?”
      </li>
    </ul>
    <P>
      Vielen Dank an Judith Pfeiffer, die uns diese Informationen zur Verfügung
      gestellt hat.
    </P>
    <Link href="/factaid">
      <a className="my-6 bold font-bold" href="/factaid">
        Zurück zur Fact Aid Übersicht
      </a>
    </Link>
  </>
);

export default Discussions;
