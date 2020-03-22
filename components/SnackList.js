import React, { useState } from "react";
import PropTypes from "prop-types";

import SnackListElement from "./SnackListElement";
const SnackList = ({ snacks, searchTerm, isOverview }) => {
  const [clipboardStatus, setClipboardStatus] = useState("");

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

  return (
    <>
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
            share={share}
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
