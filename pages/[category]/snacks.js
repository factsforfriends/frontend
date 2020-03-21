import { useRouter } from "next/router";
import "../../static/index.css";

const Category = ({ snacks }) => {
  const router = useRouter();
  const { category } = router.query;

  return <p>Kategorie: {category}</p>;
};

export default Category;

Category.getInitialProps = async function() {
  const fetchSnacks = await fetch(
    "https://raw.githubusercontent.com/flattenandflausch/frontend/master/data/data.json"
  );
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};
