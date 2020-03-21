import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";
import "../static/index.css";

const Index = ({ posts }) => (
  <>
    <PageTitle>Kategorien</PageTitle>
    <p className="text-blue-600 my-5">Add some description here</p>

    <ul className="p-5 shadow rounded list-none bg-orange-100">
      {posts.map(({ id, title }) => (
        <li
          className="rounded border-2 p-2 border-blue-500 hover:border-red-500 my-5"
          key={id}
        >
          {title}
        </li>
      ))}
    </ul>
  </>
);

Index.getInitialProps = async function() {
  const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await fetchPosts.json();

  return {
    posts
  };
};

export default Index;
