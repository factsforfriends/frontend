import React from "react";
import "../static/index.css";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 2.25rem;
  transform: translateX(-0.15rem);
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
    </>
  );
};

export default About;
