import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";
import SnackList from "../components/SnackList";
import { DATA_URL } from "../constants/urls";

import "../static/index.css";
import React, { useState } from "react";
import some from "lodash/some";
import TagList from "../components/TagList";

const Index = ({ snacks }) => {
  const [inputState, setInputState] = useState("");

  const categoriesWithLatestSnack = [];
  snacks.forEach(snack => {
    if (!some(categoriesWithLatestSnack, ["Category", snack.Category])) {
      categoriesWithLatestSnack.push(snack);
    }
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        rel="stylesheet"
      ></link>
      <PageTitle>Kategorien</PageTitle>
      <TagList snacks={snacks}></TagList>
      <input
        style={{
          padding: "5px",
          width: "100%"
        }}
        value={inputState}
        onChange={event => setInputState(event.target.value)}
        placeholder="Suche.."
      />
      <SnackList
        snacks={inputState ? snacks : categoriesWithLatestSnack}
        searchTerm={inputState}
        isOverview
      />
    </>
  );
};

Index.getInitialProps = async function() {
  const fetchSnacks = await fetch(DATA_URL);
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};

export default Index;
