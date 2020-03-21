import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";
import SnackList from "../components/SnackList";
import "../static/index.css";
import React, { useState } from "react";

const Index = ({ snacks }) => {
  const [inputState, setInputState] = useState("");

  return (
    <>
      <PageTitle>Kategorien</PageTitle>
      <input
        style={{
          padding: "5px",
          width: "100%"
        }}
        value={inputState}
        onChange={event => setInputState(event.target.value)}
        placeholder="Suche.."
      />
      <SnackList snacks={snacks} searchTerm={inputState} isOverview />
    </>
  );
};

Index.getInitialProps = async function() {
  const fetchSnacks = await fetch(
    "https://raw.githubusercontent.com/flattenandflausch/frontend/master/data/data.json"
  );
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};

export default Index;
