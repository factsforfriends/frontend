import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import replace from "lodash/replace";

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
        .map(
          ({ Category, Snack, URL, Tags, Medium, Location, Headline, ID }) => {
            const categoryWithReplacedWhiteSpace = replace(
              Category.toLowerCase(),
              " ",
              "+"
            );

            const dynamicHref = isOverview
              ? `${categoryWithReplacedWhiteSpace}/snacks`
              : `/snacks/${ID}`;

            return (
              <div
                style={{ margin: "2em 0" }}
                className="max-w-sm w-full lg:max-w-full lg:flex"
              >
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      <Link href={dynamicHref} as={dynamicHref} passHref>
                        <a href={dynamicHref}>{Headline}</a>
                      </Link>
                    </div>
                    <p className="text-gray-700 text-base">{Snack}</p>
                    <a
                      className="text-sm text-gray-600 flex items-center"
                      href={URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quelle: {URL}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      {Category.split(" ").map(category => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          #{category.toLowerCase()}
                        </span>
                      ))}
                      {Tags.split(" ").map(tag => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          #{tag.toLowerCase()}
                        </span>
                      ))}
                      {Location.split(" ").map(location => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          #{location.toLowerCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    style={{ margin: "15px 5px" }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      share(Headline, URL);
                    }}
                  >
                    {clipboardStatus != URL && <span>Share!</span>}
                    {clipboardStatus == URL && (
                      <span>URL wurde in die Zwischenablage kopiert</span>
                    )}
                  </button>
                </div>
              </div>
            );
          }
        )}
    </>
  );
};

export default SnackList;

SnackList.propTypes = {
  snacks: PropTypes.array.isRequired,
  searchTerm: PropTypes.string,
  isOverview: PropTypes.bool
};
