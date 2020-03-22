import React from "react";
import "../static/index.css";
import styled from "styled-components";
import Link from "next/link";

const H2 = styled.h2`
  font-size: 2.25rem;
  transform: translateX(-0.15rem);
`;

const Contribute = () => {
  return (
    <>
      <H2>Mitmachen</H2>
      <p>
        Facts for Friends hilft euch kurze, leicht verständliche Gegenargument
        zu Fake News zu finden. Diese werden von uns Fact-Snacks genannt und
        können schnell in eurem Freundes- und Familienkreis geteilt werden.
        Dabei sind wir aber auch auf eure Unterstützung angewiesen: Ihr habt in
        letzter Zeit falsche Nachrichten zur COVID-19-Krise gehört und habt
        bereits ein passendes Gegenargument mit Quelle? Dann reicht doch gerne
        einen eigenen Fact-Snack über das Formular auf dieser Seite ein.
      </p>
      <p>
        Jeder ist herzlich willkommen neue Fact-Snacks einzureichen. Die
        eingereichten Fact-Snacks werden entweder von unseren Moderatoren
        geprüft oder, wenn ihr verifizierte Journalist:innen seid, direkt
        hochgeladen.
      </p>
      <p>
        <a class="text-sm text-gray-600 flex items-center" href="https://forms.gle/ZFFhxaJdoQYKRfvy5" target="_blank" rel="noopener noreferrer" 
          style={{
            borderLeft: "5px solid #F6E05E",
            marginLeft: "10px",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
        HIER geht es zum Einreichen eines neuen Fact-Snacks
        </a>
      </p>
    </>
  );
};

export default Contribute;
