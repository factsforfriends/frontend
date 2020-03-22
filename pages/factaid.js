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
`;

const H5 = styled.h5`
  font-size: 1.25rem;
  transform: translateX(-0.15rem);
`;

const Contribute = () => {
  return (
    <>
      <H2>Fact Aid</H2>
      <H3>Inhalt</H3>
      <ol class="list-decimal">
          <li><Link href="#vier-tipps">Mit 4 Tipps gegen Falschnachrichten</Link></li>
          <li><Link href="#zehn-schritte">Zehn Schritte gegen die Panik</Link></li>
          <li><Link href="#mythen-entlarven">Wie entlarve ich Mythen?</Link></li>
      </ol>

      <H3 id="vier-tipps">Mit 4 Tipps gegen Falschnachrichten</H3>
      <p>Wir alle kennen die Situation: Wir sind viel zuhause, viel auf Whatsapp, Twitter, Facebook, Instagram oder Twitch. Und egal, wo wir uns mit anderen Menschen austauschen, wir tauschen uns auch über Corona aus und bekommen Nachrichten, Informationsschnipsel und Meinungen zugeschickt. Doch wie gehen wir damit am Besten um? Das ist eigentlich gar nicht so schwer, wenn man sich folgende vier Fragen stellt:</p>
      <ol class="list-decimal">
          <li><strong>Wer steht hinter der Information?</strong> Wer hat die Information ursprünglich verfasst? Handelt es sich dabei um eine vertrauenswürdige Quelle, Nachrichtenseite oder Person?</li>
          <li><strong>Welche Beweise gibt es für die Information?</strong> Werden Quellen und konkrete Belege angeführt, die man nachvollziehen kann?</li>
          <li><strong>Was ist die mögliche Absicht einer Information?</strong> Geht es darum Aufmerksamkeit für etwas zu bekommen? Unruhe zu verbreiten? Erlaubt sich jemand einen Scherz? Handelt es sich um Werbung? Oder sollen Informationen zur Verfügung gestellt werden?</li>
          <li><strong>Was sagen andere Quellen?</strong> Wird die Information von anderen Quellen gestützt, wie etwa Faktenchecks, journalistischen Nachrichtenquellen oder der Wikipedia?</li>
      </ol>
      <p>Quelle für diese Anleitung sind die verlinkten Studien und Texte der <Link href="https://www.semanticscholar.org/paper/Lateral-Reading%3A-Reading-Less-and-Learning-More-Wineburg-McGrew/5b269628f4dc29b514dfcb0b5e429e49fc0dae6d">Stanford History Education Group</Link>, des <Link href="https://psyarxiv.com/ky4x8/">Max-Planck-Institute for Human Development et al.</Link> und des <Link href="https://newslit.org/">News Literacy Project</Link>.</p>
      <H3 id="zehn-schritte"></H3>
      <p>Viele von uns fühlen sich von der aktuellen Situation überfordert. Unser Alltag hat sich grundsätzlich gewandelt, wir müssen uns auf eine ganz neue Situation einstellen. Als Einzelpersonen, als Familien und Freund:innen und als Gesellschaft. Hinzu kommt eine Flut von Informationen. Dabei ist nicht nur die Menge der Informationen eine Herausforderung. Sondern auch, dass die Gewissheiten von gestern heute vielleicht schon nicht mehr gültig sind. Hinzu kommt die Sorge um unsere eigene körperliche Unversehrtheit sowie die unserer Eltern, Kinder, Großeltern, Verwandten, Freund:innen, Kolleg:innen und liebgewonnen Nachbarn. Um in dieser Situation die Ruhe zu bewahren, gibt es hier 10 Punkte gegen die Panik: <Link href="http://www.dirkvongehlen.de/netz/gegen-die-corona-panik">www.dirkvongehlen.de/netz/gegen-die-corona-panik</Link></p>
      <ol class="list-decimal">
          <li>Ich versuche, ruhig zu bleiben und teile keine Informationen im Affekt. Ich atme dreimal tief durch, bevor ich etwas veröffentliche oder an meine Freund:innen schicke.</li>
          <li>Ich suche mindestens zwei verlässliche Quellen für die Informationen. Es gibt in solchen Situationen immer wieder Betrüger:innen, die bewusst falsche Informationen verbreiten - auch wenn sie noch so nett klingen.</li>
          <li>Ich halte mich an offizielle Stellen, an seriöse Medien und verifizierte Accounts! Twitter weist zum Beispiel unter dem Hashtag #coronavirus ganz oben auf den Account der Bundeszentrale für gesundheitliche Aufklärung hin. Auch whatsapp bietet inzwischen ein Informationshub an: <Link href="https://www.whatsapp.com/coronavirus?lang=de">www.whatsapp.com/coronavirus</Link>.</li>
          <li>Ich bin mir bewusst, dass derartige Nachrichtenlagen Betrüger:innen anziehen, die mit Absicht Fotomontagen und bewusste Lügen verbreiten. Deswegen poste, retweete und verbreite ich keine Bilder, Filme, Sprachnachrichten und Texte, deren Herkunft ich nicht kenne.</li>
          <li>Ich leite keine Kettenbriefe weiter, in denen fragwürdige und ungeprüfte Behauptungen aufgestellt werden. Weitere Informationen zu Massenbotschaften gibt es bei <Link href="https://www.klicksafe.de/themen/kommunizieren/whatsapp/kettenbriefe-in-whatsapp/"></Link>Klicksafe.</li>
          <li>Ich leite keine Fotos usw. weiter, in denen Menschen gezeigt werden, die sich (angeblich) mit dem Corona-Virus infiziert haben. Ich nenne im Netz auch keine Namen von solchen Personen. Wenn ich erfahre, dass sich in meinem Freundes- oder Bekanntenkreis jemand infiziert hat, dann ist wichtig, dass die zuständigen Ärzte und Behörden das wissen und handeln können. Ausnahmen sind hier Personen, die das selbst öffentlich gemacht haben, wie beispielsweise Cem Özdemir (Bündnis 90/die Grünen) oder Thomas Sattelberger (FDP).</li>
          <li>Ich informiere mich bei meiner Gemeinde oder meiner Stadt und deren Behörden über die Lage vor Ort. Viele Kommunen geben auch Telefonnummern an, untern denen man sich informieren und beraten lassen kann. Dieses Angebot kann insbesondere für Angehörige wichtig sein, die keinen Zugang zum Internet haben.</li>
          <li>Ich hüte mich davor, falsche Versprechen über angebliche Heilmittel zu verbreiten. Wissenschaftler:innen arbeiten mit Hochdruck an Medikamenten gegen das neue Virus, aber die gibt es noch nicht. Amazon hat bereits zahlreiche dubiose Angebote mit angeblichen Heilmitteln verbannt.</li>
          <li>Ich verbreite keine einseitigen Schuldzuweisungen und gebe diesen auch durch Retweets und Zitate keine Bühne. Das gilt insbesondere auch für <Link href="https://uebermedien.de/45749/corona-und-der-grassierende-virus-der-chinesenfeindlichkeit/">rassistische Äußerungen</Link>.</li>
          <li>Die meisten von uns verbreiten Falschnachrichten nicht in böser Absicht. Vielmehr tun wir oft aus Sorge um oder Fürsorge für andere, weil wir helfen wollen. Die größte Hilfe aber ist es, keine Angst und Panik zu verbreiten.</li>
      </ol>
      <p>Diese 10 Punkte sind eine leicht überarbeitete Version der Texte von <Link href="http://www.dirkvongehlen.de/netz/gegen-die-corona-panik/">Dirk von Gehlen</Link> und <Link href="https://www.sueddeutsche.de/medien/coronavirus-informationstipps-1.4846836">Klaus Ott</Link>. Vielen Dank fürs zur Verfügung stellen!</p>
      <H3 id="mythen-entlarven">Wie entlarve ich Mythen?</H3>
      <p>Die Entlarvung von Mythen ist nicht ganz einfach. Es braucht viel Sorgfalt, wenn man versucht, Fehlinformationen zu widerlegen. Denn sonst kann es passieren, dass unbeabsichtigt genau die Mythen bestärkt werden, die man korrigieren möchte. Ein Grund dafür ist der sog. Familiarity-Backfire Effekt: Um eine Falschnachricht zu widerlegen, muss man sie erst einmal ansprechen - woher sollte die andere Person sonst wissen, worüber du redest? Doch wenn eine Falschnachricht für Faktenchecks immer wieder wiederholt wird, macht das Menschen mit dieser Nachricht so vertraut, dass sie sie für glaubwürdig halten, einfach weil sie ihnen bekannt vorkommt. Um diese und andere Boomerang-Effekte zu vermeiden, sind drei Hauptelemente für eine wirksame Korrektur erforderlich: Erstens muss sich die Widerlegung auf die Fakten und nicht auf den Mythos konzentrieren. So kann man vermeiden, dass die Fehlinformationen noch vertrauter werden. Zweitens sollte vor jeder Erwähnung eines Mythos eine ausdrückliche Warnung stehen, um Leser:innen darauf hinzuweisen, dass die folgende Information falsch ist. Schließlich sollte die Widerlegung eine alternative Erklärung enthalten, die wichtige Eigenschaften der ursprünglichen Fehlinformation erklärt.</p>
      <H5>Aufbau einer erfolgreichen Entlarvung</H5>
      <ul>
          <li><strong>Kernfakten:</strong> Bei einer Widerlegung solltest Du die Fakten betonen, nicht den Mythos. Präsentiere dabei nur die wichtigen Fakten, um zu vermeiden, dass zu viele Informationen zu einer Überforderung führen. Denn das kann den Mythos noch weiter verfestigen (Overkill-Backfire-Effekt). Informationen, die für Leser:innen einfach zu verstehen sind, werden auch eher als wahr akzeptiert. Deswegen sollte die Sprache einfach gehalten sein. Ein wichtiges Element sind kurze Sätze.</li>
          <li><strong>Explizite Warnungen:</strong> Bevor ein Mythos erwähnt wird, sollten ein Text oder visuelle Hinweise darauf hinweisen, dass die folgenden Informationen falsch sind.</li>
          <li><strong>Alternative Erklärung:</strong> Alle Lücken, die durch das Debunking entstehen, müssen geschlossen werden. Zum Beispiel durch eine alternative kausale Erklärung dafür, warum der Mythos falsch ist. Dient ein Mythos dazu, ein tatsächlich eingetretenes Ereignis zu erklären, sollte die tatsächliche Ursache genannt werden. Das kann um eine Erläuterung ergänzt werden, warum die Fehlinformation überhaupt in die Welt gesetzt wurde. Wird eine solche alternative Erklärung nicht geliefert, greifen Menschen häufig lieber auf eine falsche Erklärung zurück, als gar keine zu haben.</li>
          <li><strong>Grafik:</strong> Kernfakten sollten nach Möglichkeit grafisch dargestellt werden. Grafisch dargestellte Informationen werden weniger häufig falsch aufgefasst als Text.</li>
      </ul>
      <p><strong>Außerdem zu berücksichtigen:</strong> Menschen lassen sich nicht gerne von Dingen überzeugen, die ihrer persönlichen Weltanschauung widersprechen (Worldview-Backfire-Effekt). Werden ihnen Pro- und Contra-Argumente präsentiert, suchen sie sich eher die Argumente aus, die zu ihrer Einstellung passen. Überwiegen Argumente, die der eigenen Einstellung zuwiderlaufen, kann das Leute in ihrer Ansicht sogar noch bestärken. Sie suchen dann nämlich noch intensiver nach Argumenten, die ihre Ansicht bestätigen. Deshalb sollte sich die Entlarvung eines Mythos eher an diejenigen richten, die nicht vollkommen überzeugt von dessen Richtigkeit sind. Außerdem kann es hilfreich sein, Fakten und Argumente so zu präsentieren, dass sie nicht sofort als Bedrohung für die Weltanschauung der Empfänger:innen erscheinen.</p>
      <p>Die hier zusammengefassten Informationen stammen gekürzt, übersetzt und überarbeitet aus dem <Link href="https://skepticalscience.com/docs/Debunking_Handbook.pdf">Debunking Handbook</Link>, das uns Stephan Lewandowsky zur Verfügung gestellt hat.</p>
    </>
  );
};

export default Contribute;
