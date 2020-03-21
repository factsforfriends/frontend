import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";
import "../static/index.css";
import { readString } from 'react-papaparse'

const Index = ({ snacks }) => (
  <>
    <PageTitle>Kategorien</PageTitle>
    <p className="text-blue-600 my-5">Add some description here</p>

    <ul className="p-5 shadow rounded list-none bg-orange-100">
      {snacks.map((snack) => (
        <li
          className="rounded border-2 p-2 border-blue-500 hover:border-red-500 my-5"
          // key={id}
        >
          {snack}
        </li>
      ))}
    </ul>
  </>
);

Index.getInitialProps = async function() {
  const fetchSnacks = await fetch("https://raw.githubusercontent.com/flattenandflausch/frontend/master/data/data.csv");
  const snacksPlain = await fetchSnacks.text();
  const snacks = readString(snacksPlain).data;

  return {
    snacks
  };
};

export default Index;
