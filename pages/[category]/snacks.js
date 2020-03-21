import { useRouter } from "next/router";
import "../../static/index.css";
import SnackList from "../../components/SnackList";
import PageTitle from "../../components/PageTitle";
import startCase from "lodash/startCase";

const Category = ({ snacks }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <PageTitle>{startCase(category)}</PageTitle>
      <SnackList
        snacks={snacks.filter(
          snack => snack.Category.toLowerCase() === category
        )}
      />
    </>
  );
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
