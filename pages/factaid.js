import React from "react";
import "../static/index.css";
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

const Contribute = () => {
  return (
    <>
      <H2>Fact Aid</H2>
      <H3>Inhalt</H3>
      <ol class="list-decimal" style={{ paddingLeft: "20px" }}>
        <li>
          <Link href="#vier-tipps">Mit 4 Tipps gegen Falschnachrichten</Link>
        </li>
        <li>
          <Link href="#zehn-schritte">Zehn Schritte gegen die Panik</Link>
        </li>
        {/* <li><Link href="#"></Link></li> */}
      </ol>

      <H3 id="vier-tipps">Mit 4 Tipps gegen Falschnachrichten</H3>
      <p>
        Wir alle kennen die Situation: Wir sind viel zuhause, viel auf Whatsapp,
        Twitter, Facebook, Instagram oder Twitch. Und egal, wo wir uns mit
        anderen Menschen austauschen, wir tauschen uns auch über Corona aus und
        bekommen Nachrichten, Informationsschnipsel und Meinungen zugeschickt.
        Doch wie gehen wir damit am Besten um? Das ist eigentlich gar nicht so
        schwer, wenn man sich folgende vier Fragen stellt:
      </p>
      <ol
        class="list-decimal"
        style={{ paddingLeft: "20px", marginTop: "5px" }}
      >
        <li style={{paddingTop: "15px"}}>
          <strong>Wer steht hinter der Information?</strong> Wer hat die
          Information ursprünglich verfasst? Handelt es sich dabei um eine
          vertrauenswürdige Quelle, Nachrichtenseite oder Person?
        </li>
        <li style={{paddingTop: "15px"}}>
          <strong>Welche Beweise gibt es für die Information?</strong> Werden
          Quellen und konkrete Belege angeführt, die man nachvollziehen kann?
        </li>
        <li style={{paddingTop: "15px"}}>
          <strong>Was ist die mögliche Absicht einer Information?</strong> Geht
          es darum Aufmerksamkeit für etwas zu bekommen? Unruhe zu verbreiten?
          Erlaubt sich jemand einen Scherz? Handelt es sich um Werbung? Oder
          sollen Informationen zur Verfügung gestellt werden?
        </li>
        <li style={{paddingTop: "15px"}}>
          <strong>Was sagen andere Quellen?</strong> Wird die Information von
          anderen Quellen gestützt, wie etwa Faktenchecks, journalistischen
          Nachrichtenquellen oder der Wikipedia?
        </li>
      </ol>
      <p>
        Quelle für diese Anleitung sind die verlinkten Studien und Texte der{" "}
        <Link href="https://www.semanticscholar.org/paper/Lateral-Reading%3A-Reading-Less-and-Learning-More-Wineburg-McGrew/5b269628f4dc29b514dfcb0b5e429e49fc0dae6d">
          Stanford History Education Group
        </Link>
        , des{" "}
        <Link href="https://psyarxiv.com/ky4x8/">
          Max-Planck-Institute for Human Development et al.
        </Link>{" "}
        und des <Link href="https://newslit.org/">News Literacy Project</Link>.
      </p>
      <H3 id="zehn-schritte"></H3>
    </>
  );
};

export default Contribute;
