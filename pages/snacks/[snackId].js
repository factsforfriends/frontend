import { useRouter } from "next/router";
import "../../static/index.css";

const SnackDetail = () => {
  const router = useRouter();
  const { snackId } = router.query;

  return <p>Snack: {snackId}</p>;
};

export default SnackDetail;
