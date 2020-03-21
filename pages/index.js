import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";
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
  
      {snacks.filter(snack => {
        if (!inputState || snack.Tags.toLowerCase().includes(inputState.toLowerCase())) return snack
      }).map(({Category, Text, URL, Tags, Medium, Location}) => (
        <div style={{margin: "2em 0"}} className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">{Category}</div>
              <p className="text-gray-700 text-base">{Text}</p>
              <a className="text-sm text-gray-600 flex items-center" href={URL} target="_blank" rel="noopener noreferrer">
                {URL}
              </a>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{Category.toLowerCase()}</span> */}
                {Tags.split(" ").map(tag => (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag.toLowerCase()}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        ))}
    </>
  )
}

Index.getInitialProps = async function() {
  const fetchSnacks = await fetch("https://raw.githubusercontent.com/flattenandflausch/frontend/master/data/data.json");
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};

export default Index;
