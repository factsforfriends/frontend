import React from "react";
import styled from "styled-components";
import Link from "next/link";
import "../../static/index.css";

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

const Tipps = () => (
  <>
    <H3 className="mb-6" id="vier-tipps">
      Mit 4 Tipps gegen Falschnachrichten
    </H3>
    <p>
      Wir alle kennen die Situation: Wir sind viel zuhause, viel auf Whatsapp,
      Twitter, Facebook, Instagram oder Twitch. Und egal, wo wir uns mit anderen
      Menschen austauschen, wir tauschen uns auch über Corona aus und bekommen
      Nachrichten, Informationsschnipsel und Meinungen zugeschickt. Doch wie
      gehen wir damit am Besten um? Das ist eigentlich gar nicht so schwer, wenn
      man sich folgende vier Fragen stellt:
    </p>
    <ol class="list-decimal" style={{ paddingLeft: "20px", marginTop: "5px" }}>
      <li style={{ paddingTop: "15px" }}>
        <strong>Wer steht hinter der Information?</strong> Wer hat die
        Information ursprünglich verfasst? Handelt es sich dabei um eine
        vertrauenswürdige Quelle, Nachrichtenseite oder Person?
      </li>
      <li style={{ paddingTop: "15px" }}>
        <strong>Welche Beweise gibt es für die Information?</strong> Werden
        Quellen und konkrete Belege angeführt, die man nachvollziehen kann?
      </li>
      <li style={{ paddingTop: "15px" }}>
        <strong>Was ist die mögliche Absicht einer Information?</strong> Geht es
        darum Aufmerksamkeit für etwas zu bekommen? Unruhe zu verbreiten?
        Erlaubt sich jemand einen Scherz? Handelt es sich um Werbung? Oder
        sollen Informationen zur Verfügung gestellt werden?
      </li>
      <li style={{ paddingTop: "15px" }}>
        <strong>Was sagen andere Quellen?</strong> Wird die Information von
        anderen Quellen gestützt, wie etwa Faktenchecks, journalistischen
        Nachrichtenquellen oder der Wikipedia?
      </li>
    </ol>
    <P>
      Quelle für diese Anleitung sind die verlinkten Studien und Texte der{" "}
      <Link href="https://www.semanticscholar.org/paper/Lateral-Reading%3A-Reading-Less-and-Learning-More-Wineburg-McGrew/5b269628f4dc29b514dfcb0b5e429e49fc0dae6d">
        Stanford History Education Group
      </Link>
      , des{" "}
      <Link href="https://psyarxiv.com/ky4x8/">
        Max-Planck-Institute for Human Development et al.
      </Link>{" "}
      und des <Link href="https://newslit.org/">News Literacy Project</Link>.
    </P>
    <Link href="/factaid">
      <a className="my-6 bold font-bold" href="/factaid">
        Zurück zur Fact Aid Übersicht
      </a>
    </Link>
  </>
);

export default Tipps;
