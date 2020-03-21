import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";
import "../static/index.css";

const Index = ({ snacks }) => (
  <>
    <PageTitle>Kategorien</PageTitle>
    <p className="text-blue-600 my-5">Add some description here</p>

    <ul className="p-5 shadow rounded list-none bg-orange-100">
      {snacks.map(({Category, Text, URL}) => (
        <li
          className="rounded border-2 p-2 border-blue-500 hover:border-red-500 my-5"
          // key={id}
        >
          <h2>{Category}</h2>
          <p>{Text}</p>
          <div>{URL}</div>
        </li>
      ))}
    </ul>
  </>
);

Index.getInitialProps = async function() {
  const fetchSnacks = await fetch("https://raw.githubusercontent.com/flattenandflausch/frontend/master/data/data.json");
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};

export default Index;
