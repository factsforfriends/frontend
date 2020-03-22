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

const Myths = () => (
  <>
    <H3 className="mb-6" id="mythen-entlarven">
      Wie entlarve ich Mythen?
    </H3>
    <p>
      Die Entlarvung von Mythen ist nicht ganz einfach. Es braucht viel
      Sorgfalt, wenn man versucht, Fehlinformationen zu widerlegen. Denn sonst
      kann es passieren, dass unbeabsichtigt genau die Mythen bestärkt werden,
      die man korrigieren möchte. Ein Grund dafür ist der sog.
      Familiarity-Backfire Effekt: Um eine Falschnachricht zu widerlegen, muss
      man sie erst einmal ansprechen - woher sollte die andere Person sonst
      wissen, worüber du redest? Doch wenn eine Falschnachricht für Faktenchecks
      immer wieder wiederholt wird, macht das Menschen mit dieser Nachricht so
      vertraut, dass sie sie für glaubwürdig halten, einfach weil sie ihnen
      bekannt vorkommt. Um diese und andere Boomerang-Effekte zu vermeiden, sind
      drei Hauptelemente für eine wirksame Korrektur erforderlich: Erstens muss
      sich die Widerlegung auf die Fakten und nicht auf den Mythos
      konzentrieren. So kann man vermeiden, dass die Fehlinformationen noch
      vertrauter werden. Zweitens sollte vor jeder Erwähnung eines Mythos eine
      ausdrückliche Warnung stehen, um Leser:innen darauf hinzuweisen, dass die
      folgende Information falsch ist. Schließlich sollte die Widerlegung eine
      alternative Erklärung enthalten, die wichtige Eigenschaften der
      ursprünglichen Fehlinformation erklärt.
    </p>
    <H5>Aufbau einer erfolgreichen Entlarvung</H5>
    <ul style={{ paddingLeft: "20px", marginTop: "5px" }}>
      <li style={{ paddingTop: "15px" }}>
        <strong>Kernfakten:</strong> Bei einer Widerlegung solltest Du die
        Fakten betonen, nicht den Mythos. Präsentiere dabei nur die wichtigen
        Fakten, um zu vermeiden, dass zu viele Informationen zu einer
        Überforderung führen. Denn das kann den Mythos noch weiter verfestigen
        (Overkill-Backfire-Effekt). Informationen, die für Leser:innen einfach
        zu verstehen sind, werden auch eher als wahr akzeptiert. Deswegen sollte
        die Sprache einfach gehalten sein. Ein wichtiges Element sind kurze
        Sätze.
      </li>
      <li style={{ paddingTop: "15px" }}>
        <strong>Explizite Warnungen:</strong> Bevor ein Mythos erwähnt wird,
        sollten ein Text oder visuelle Hinweise darauf hinweisen, dass die
        folgenden Informationen falsch sind.
      </li>
      <li style={{ paddingTop: "15px" }}>
        <strong>Alternative Erklärung:</strong> Alle Lücken, die durch das
        Debunking entstehen, müssen geschlossen werden. Zum Beispiel durch eine
        alternative kausale Erklärung dafür, warum der Mythos falsch ist. Dient
        ein Mythos dazu, ein tatsächlich eingetretenes Ereignis zu erklären,
        sollte die tatsächliche Ursache genannt werden. Das kann um eine
        Erläuterung ergänzt werden, warum die Fehlinformation überhaupt in die
        Welt gesetzt wurde. Wird eine solche alternative Erklärung nicht
        geliefert, greifen Menschen häufig lieber auf eine falsche Erklärung
        zurück, als gar keine zu haben.
      </li>
      <li style={{ paddingTop: "15px" }}>
        <strong>Grafik:</strong> Kernfakten sollten nach Möglichkeit grafisch
        dargestellt werden. Grafisch dargestellte Informationen werden weniger
        häufig falsch aufgefasst als Text.
      </li>
    </ul>
    <P>
      <strong>Außerdem zu berücksichtigen:</strong> Menschen lassen sich nicht
      gerne von Dingen überzeugen, die ihrer persönlichen Weltanschauung
      widersprechen (Worldview-Backfire-Effekt). Werden ihnen Pro- und
      Contra-Argumente präsentiert, suchen sie sich eher die Argumente aus, die
      zu ihrer Einstellung passen. Überwiegen Argumente, die der eigenen
      Einstellung zuwiderlaufen, kann das Leute in ihrer Ansicht sogar noch
      bestärken. Sie suchen dann nämlich noch intensiver nach Argumenten, die
      ihre Ansicht bestätigen. Deshalb sollte sich die Entlarvung eines Mythos
      eher an diejenigen richten, die nicht vollkommen überzeugt von dessen
      Richtigkeit sind. Außerdem kann es hilfreich sein, Fakten und Argumente so
      zu präsentieren, dass sie nicht sofort als Bedrohung für die
      Weltanschauung der Empfänger:innen erscheinen.
    </P>
    <P>
      Die hier zusammengefassten Informationen stammen gekürzt, übersetzt und
      überarbeitet aus dem{" "}
      <Link href="https://skepticalscience.com/docs/Debunking_Handbook.pdf">
        Debunking Handbook
      </Link>
      , das uns Stephan Lewandowsky zur Verfügung gestellt hat.
    </P>
    <Link href="/factaid">
      <a className="my-6 bold font-bold" href="/factaid">
        Zurück zur Fact Aid Übersicht
      </a>
    </Link>
  </>
);

export default Myths;
