import { useRouter } from "next/router";
import "../../static/index.css";
import SnackList from "../../components/SnackList";
import PageTitle from "../../components/PageTitle";
import startCase from "lodash/startCase";
import replace from "lodash/replace";
import { DATA_URL } from "../../constants/urls";
import fetch from "isomorphic-unfetch";

const Category = ({ snacks }) => {
  const router = useRouter();
  const { category } = router.query;
  const decodedCategory = replace(category, "+", " ");

  return (
    <>
      <PageTitle>{startCase(decodedCategory)}</PageTitle>
      <SnackList
        snacks={snacks.filter(
          snack => snack.Category.toLowerCase() === decodedCategory
        )}
      />
    </>
  );
};

export default Category;

Category.getInitialProps = async function() {
  const fetchSnacks = await fetch(DATA_URL);
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};
