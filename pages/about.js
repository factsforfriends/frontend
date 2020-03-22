import React from "react";
import "../static/index.css";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 2.25rem;
  transform: translateX(-0.15rem);
`;

const P = styled.p`
  margin-top: 15px;
`;

const About = () => {
  return (
    <>
      <H2>Über uns</H2>
      <p>
        Die Webapp Facts for Friends stellt kurze und leicht verständliche
        Gegenargumente (Fact-Snacks) zu kursierende Fake-News bereit.
      </p>
      <p>
        Engagierte Bürger:innen finden dort teilbare Fact-Snacks mit denen sie
        Fake News in ihrem privaten Umfeld begegnen können, auch wenn es Ihnen
        an Wissen und/oder Zeit fehlt um selbst lange Texte zu schreiben. Als
        Multiplikator:innen und Informational influencers erreichen sie so mit
        geringem Aufwand Personen ihrem privaten Umfeld, die klassischen
        massenmedialen Fact-Checking-Inhalten oder politischer Kommunikation
        nicht vertrauen oder von solchen Inhalten überfordert sind.
      </p>
      <p>
        Die Fact Snacks können von verifizierten Fact-Checkern wie z. B.
        Journalist:innen direkt eingereicht werden oder werden aus der Community
        generiert und dann vom Platform-Team verifiziert.
      </p>
      <H2>Unser Team</H2>
      <p>Im Rahmen des #wirvsvirus Hackathons der deutschen Bundesregierung haben wir uns in einem Team von 10 Developer:innen, Designer:innen, Wissenschaflter:innen, Journalist:innen und Gründer:innen zusammengefunden und in diesem Rahmen die WebApp Facts for Friends ins Leben gerufen.</p>
      <P>
        <img 
          style={{ borderRadius: "15px" }}
          src={"https://raw.githubusercontent.com/flattenandflausch/frontend/master/static/graphics/WirVsVirus.jpg"}
        ></img>
      </P>
      <ul
        style={{ paddingLeft: "20px", marginTop: "5px" }}
      >
        <li style={{paddingTop: "15px"}}><strong>Lisa</strong> ist wissenschaftliche Mitarbeiterin am Leibniz-Institut für Medienforschung (Hans-Bredow-Institut). Sie forscht dort zur Nutzung und Wirkung digitaler Medienangebote, insbesondere zu Nachrichtennutzung in sozialen Medien. Zusammen mit Kathy hatte sie die Idee zu dieser Hackathon-Challenge und hat im Concept- und Contentbereich mitgearbeitet.</li>
        <li style={{paddingTop: "15px"}}><strong>Kathy</strong> ist Projektleiterin für digitale Nachrichten- und Informationskompetenz bei der Stiftung neue Verantwortung. Sie ist promovierte Soziologin und arbeitet seit vielen Jahren zu digitalen Öffentlichkeiten. Zusammen mit Lisa hatte sie die Idee zu dieser Hackathon-Challenge und hat im Concept- und Contentbereich mitgearbeitet. </li>
        <li style={{paddingTop: "15px"}}><strong>Erik</strong> berät Unternehmen als Teil des Cloud Innovation Labs bei IBM in allen Fragen rund um Cloud-Projekte und studiert nebenbei im Master IT Systems Engineering. Als Teil dieses Hackathon-Projekts konnte er seine verstaubten React-Kenntnisse auffrischen und hat das Platform-Development Team unterstützt.</li>
        <li style={{paddingTop: "15px"}}><strong>Selina</strong> studiert im dritten Mastersemester Journalismus an der Universität Mainz und ist freie Datenjournalistin. Für das Projekt hat sie im Content-Bereich mitgearbeitet, recherchiert, Texte verfasst und redigiert.</li>
        <li style={{paddingTop: "15px"}}><strong>Henri</strong> studiert im dritten Semester Journalistik an der Katholischen Universität Eichstätt-Ingolstadt und ist außerdem freier Mitarbeiter bei der Südwest Presse in Ulm und Stipendiat am Institut für Journalistenausbildung der Passauer Neuen Presse. Diese Kompetenzen hat er im Content-Bereich unseres Projektes eingebracht und sowohl Texte verfasst als auch redigiert.</li>
        <li style={{paddingTop: "15px"}}><strong>Sebastian</strong>(45) ist seit über 20 Jahren Grafiker in einem kleinen Hamburger Fachverlag. Für das Projekt hat er das Design für die Sharepics sowie das Logo entworfen und das finale Bewerbungsvideo geschnitten.</li>
        <li style={{paddingTop: "15px"}}><strong>Jens</strong> schlägt als Computational Biologist am Max-Planck-Institut für Herz- und Lungenforschung Brücken zwischen Wissenschaft, Datenanalyse und Cloud-Infrastruktur. Für das Projekt hat er das Platform-Development und Content-Team unterstützt.</li>
        <li style={{paddingTop: "15px"}}><strong>Kilian</strong> studiert im dritten Semester Journalistik an der Katholischen Universität Eichstätt-Ingolstadt. Da er privat als Journalist häufig mit Fake-News zu kämpfen hat und diese widerlegen muss, ist ihm das Projekt eine Herzensangelegenheit. Er hat im Content-Bereich mitgewirkt und Texte verfasst und redigiert.</li>
        <li style={{paddingTop: "15px"}}><strong>Katharina</strong> ist gebürtige Hamburgerin und hat mit 18 ihr erstes Unternehmen gegründet. Nach ihrem Masterabschluss in Entrepreneurship und Innovationsmanagement an der Königlichen Technischen Universität Stockholm hat sie ein weiteres Startup gegründet und arbeitet als Head of Brand Marketing und Kommunikation bei einem wachsenden Startup. Bei Facts for Friends hat sie den Design-Thinking Prozess begleitet und das Content Team unterstützt.</li>
        <li style={{paddingTop: "15px"}}><strong>Francisco</strong> promoviert in Mensch-Computer Interaktion an der Universität Stuttgart. Seine Forschung ist an der Augmentierung der menschlichen Wahrnehmung durch digitalen Medien fokussiert. Anhand seines Hintergrund in Elektrotechnik, er versucht die biologische Grenzen der menschlichen Sinne mit wearable Computers zu überschreiten. Er unterstützt das Projekt mit Beiträgen zum Thema UX.</li>
        <li style={{paddingTop: "15px"}}><strong>Tobias</strong> ist Software Entwickler im Frontend-Bereich. Für das Projekt hat er das das Platform-Development Team mit seinen React-Kentnissen unterstützt.</li>
        <li style={{paddingTop: "15px"}}><strong>Nele</strong> studiert im vierten Semester International Management in einem Double Degree. Für das Projekt hat sie das Content-team unterstützt.</li>
      </ul>
    </>
  );
};

export default About;
