import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import SnackListElement from "./SnackListElement";
const SnackList = ({ snacks, searchTerm, isOverview }) => {
  const [clipboardStatus, setClipboardStatus] = useState("");
  const [isMinimalView, setMinimalView] = useState(true);
  const router = useRouter();

  const toggleView = () => setMinimalView(!isMinimalView);

  const toggleViewButton = (
    <button
      style={{ margin: "15px 5px" }}
      className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded self-end"
      onClick={toggleView}
    >
      {isMinimalView ? "List View" : "Minimal View"}
    </button>
  );

  const share = (title, url) => {
    if (navigator.share) {
      navigator
        .share({ title, url })
        .then(() => console.log("shared"))
        .catch(e => console.error(e));
    } else {
      console.log("copied URL to clipboard");
      copyToClipboard(url);
    }
  };

  const copyToClipboard = str => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setClipboardStatus(str);
    setTimeout(() => setClipboardStatus(""), 3000);
  };

  if (router.query && router.query.tag) {
    searchTerm = router.query.tag;
  }

  return (
    <>
      {toggleViewButton}
      {snacks
        .filter(snack => {
          if (
            !searchTerm ||
            snack.Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            snack.Tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
            snack.Location.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return snack;
        })
        .map(snack => (
          <SnackListElement
            snack={snack}
            isOverview={isOverview}
            clipboardStatus={clipboardStatus}
            copyToClipboard={copyToClipboard}
            share={share}
            isMinimalView={isMinimalView}
          />
        ))}
    </>
  );
};

export default SnackList;

SnackList.propTypes = {
  snacks: PropTypes.array.isRequired,
  searchTerm: PropTypes.string,
  isOverview: PropTypes.bool
};
