import { useRouter } from "next/router";
import "../../static/index.css";
import find from "lodash/find";
import toInteger from "lodash/toInteger";
import PageTitle from "../../components/PageTitle";

const SnackDetail = ({ snacks }) => {
  const router = useRouter();
  const { snackId } = router.query;

  const requestedSnack = find(snacks, ["ID", toInteger(snackId)]);

  const { Headline, Category, Snack, URL, Tags } = requestedSnack;

  return (
    <>
      <PageTitle>{Headline}</PageTitle>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal mt-6">
        <p>{Snack}</p>
      </div>
      <a
        className="text-sm text-gray-600 flex items-center mt-6"
        href={URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Quelle: {URL}
      </a>
    </>
  );
};

export default SnackDetail;

SnackDetail.getInitialProps = async function() {
  const fetchSnacks = await fetch(
    "https://raw.githubusercontent.com/flattenandflausch/frontend/master/data/data.json"
  );
  const snacks = await fetchSnacks.json();

  return {
    snacks
  };
};
