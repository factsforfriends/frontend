import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";

const Index = ({ posts }) => (
  <>
    <PageTitle>Kategorien</PageTitle>
    <p>Add some description here</p>

    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
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
