import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";
import "../static/index.css";

const Index = ({ snacks }) => (
  <>
    <PageTitle>Kategorien</PageTitle>
    <p className="text-blue-600 my-5">Add some description here</p>

    {snacks.map(({Category, Text, URL, Tags, Medium, Location, Headline}) => (
      <div className="max-w-sm w-full lg:max-w-full lg:flex snack-card">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{Headline}</div>
            <p className="text-gray-700 text-base">{Text}</p>
            Quelle: <a className="text-sm text-gray-600 flex items-center" href={URL} target="_blank">
              {URL}
            </a>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{Category.toLowerCase()}</span>
              {Tags.split(" ").map(tag => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag.toLowerCase()}</span>
              ))}
              {Location.split(" ").map(location => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{location.toLowerCase()}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      ))}
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
