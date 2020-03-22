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

const Contribute = () => {
  return (
    <>
      <H2 className="mb-6">Fact Aid</H2>
      <ol class="list-decimal" style={{ paddingLeft: "20px" }}>
        <li>
          <Link href="/factaid/tipps">Mit 4 Tipps gegen Falschnachrichten</Link>
        </li>
        <li>
          <Link href="/factaid/steps">Zehn Schritte gegen die Panik</Link>
        </li>
        <li>
          <Link href="/factaid/myths">Wie entlarve ich Mythen?</Link>
        </li>
        <li>
          <Link href="/factaid/discussions">
            Tipps und Anregungen für die Diskussion mit anderen
          </Link>
        </li>
      </ol>
    </>
  );
};

export default Contribute;
