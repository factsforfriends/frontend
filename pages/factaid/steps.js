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
const Steps = () => (
  <>
    <H3 className="mb-6" id="zehn-schritte">
      Zehn Schritte gegen die Panik
    </H3>
    <p>
      Viele von uns fühlen sich von der aktuellen Situation überfordert. Unser
      Alltag hat sich grundsätzlich gewandelt, wir müssen uns auf eine ganz neue
      Situation einstellen. Als Einzelpersonen, als Familien und Freund:innen
      und als Gesellschaft. Hinzu kommt eine Flut von Informationen. Dabei ist
      nicht nur die Menge der Informationen eine Herausforderung. Sondern auch,
      dass die Gewissheiten von gestern heute vielleicht schon nicht mehr gültig
      sind. Hinzu kommt die Sorge um unsere eigene körperliche Unversehrtheit
      sowie die unserer Eltern, Kinder, Großeltern, Verwandten, Freund:innen,
      Kolleg:innen und liebgewonnen Nachbarn. Um in dieser Situation die Ruhe zu
      bewahren, gibt es hier 10 Punkte gegen die Panik:{" "}
      <Link href="http://www.dirkvongehlen.de/netz/gegen-die-corona-panik">
        www.dirkvongehlen.de/netz/gegen-die-corona-panik
      </Link>
    </p>
    <ol class="list-decimal" style={{ paddingLeft: "20px", marginTop: "5px" }}>
      <li style={{ paddingTop: "15px" }}>
        Ich versuche, ruhig zu bleiben und teile keine Informationen im Affekt.
        Ich atme dreimal tief durch, bevor ich etwas veröffentliche oder an
        meine Freund:innen schicke.
      </li>
      <li style={{ paddingTop: "15px" }}>
        Ich suche mindestens zwei verlässliche Quellen für die Informationen. Es
        gibt in solchen Situationen immer wieder Betrüger:innen, die bewusst
        falsche Informationen verbreiten - auch wenn sie noch so nett klingen.
      </li>
      <li style={{ paddingTop: "15px" }}>
        Ich halte mich an offizielle Stellen, an seriöse Medien und verifizierte
        Accounts! Twitter weist zum Beispiel unter dem Hashtag #coronavirus ganz
        oben auf den Account der Bundeszentrale für gesundheitliche Aufklärung
        hin. Auch whatsapp bietet inzwischen ein Informationshub an:{" "}
        <Link href="https://www.whatsapp.com/coronavirus?lang=de">
          www.whatsapp.com/coronavirus
        </Link>
        .
      </li>
      <li style={{ paddingTop: "15px" }}>
        Ich bin mir bewusst, dass derartige Nachrichtenlagen Betrüger:innen
        anziehen, die mit Absicht Fotomontagen und bewusste Lügen verbreiten.
        Deswegen poste, retweete und verbreite ich keine Bilder, Filme,
        Sprachnachrichten und Texte, deren Herkunft ich nicht kenne.
      </li>
      <li style={{ paddingTop: "15px" }}>
        Ich leite keine Kettenbriefe weiter, in denen fragwürdige und ungeprüfte
        Behauptungen aufgestellt werden. Weitere Informationen zu
        Massenbotschaften gibt es bei{" "}
        <Link href="https://www.klicksafe.de/themen/kommunizieren/whatsapp/kettenbriefe-in-whatsapp/">
          Klicksafe
        </Link>
        .
      </li>
      <li style={{ paddingTop: "15px" }}>
        Ich leite keine Fotos usw. weiter, in denen Menschen gezeigt werden, die
        sich (angeblich) mit dem Corona-Virus infiziert haben. Ich nenne im Netz
        auch keine Namen von solchen Personen. Wenn ich erfahre, dass sich in
        meinem Freundes- oder Bekanntenkreis jemand infiziert hat, dann ist
        wichtig, dass die zuständigen Ärzte und Behörden das wissen und handeln
        können. Ausnahmen sind hier Personen, die das selbst öffentlich gemacht
        haben, wie beispielsweise Cem Özdemir (Bündnis 90/die Grünen) oder
        Thomas Sattelberger (FDP).
      </li>
      <li style={{ paddingTop: "15px" }}>
        Ich informiere mich bei meiner Gemeinde oder meiner Stadt und deren
        Behörden über die Lage vor Ort. Viele Kommunen geben auch Telefonnummern
        an, untern denen man sich informieren und beraten lassen kann. Dieses
        Angebot kann insbesondere für Angehörige wichtig sein, die keinen Zugang
        zum Internet haben.
      </li>
      <li style={{ paddingTop: "15px" }}>
        Ich hüte mich davor, falsche Versprechen über angebliche Heilmittel zu
        verbreiten. Wissenschaftler:innen arbeiten mit Hochdruck an Medikamenten
        gegen das neue Virus, aber die gibt es noch nicht. Amazon hat bereits
        zahlreiche dubiose Angebote mit angeblichen Heilmitteln verbannt.
      </li>
      <li style={{ paddingTop: "15px" }}>
        Ich verbreite keine einseitigen Schuldzuweisungen und gebe diesen auch
        durch Retweets und Zitate keine Bühne. Das gilt insbesondere auch für{" "}
        <Link href="https://uebermedien.de/45749/corona-und-der-grassierende-virus-der-chinesenfeindlichkeit/">
          rassistische Äußerungen
        </Link>
        .
      </li>
      <li style={{ paddingTop: "15px" }}>
        Die meisten von uns verbreiten Falschnachrichten nicht in böser Absicht.
        Vielmehr tun wir oft aus Sorge um oder Fürsorge für andere, weil wir
        helfen wollen. Die größte Hilfe aber ist es, keine Angst und Panik zu
        verbreiten.
      </li>
    </ol>
    <P>
      Diese 10 Punkte sind eine leicht überarbeitete Version der Texte von{" "}
      <Link href="http://www.dirkvongehlen.de/netz/gegen-die-corona-panik/">
        Dirk von Gehlen
      </Link>{" "}
      und{" "}
      <Link href="https://www.sueddeutsche.de/medien/coronavirus-informationstipps-1.4846836">
        Klaus Ott
      </Link>
      . Vielen Dank fürs zur Verfügung stellen!
    </P>
    <Link href="/factaid">
      <a className="my-6 bold font-bold" href="/factaid">
        Zurück zur Fact Aid Übersicht
      </a>
    </Link>
  </>
);

export default Steps;
