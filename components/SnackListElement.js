import React, { useRef } from "react";
import replace from "lodash/replace";
import Link from "next/link";
import Sharepic from "./Sharepic";

const SnackListElement = ({ snack, isOverview, clipboardStatus, share }) => {
  const sharePicRef = useRef();

  const { Category, Snack, URL, Tags, Medium, Location, Headline, ID } = snack;

  const categoryWithReplacedWhiteSpace = replace(
    Category.toLowerCase(),
    " ",
    "+"
  );

  const dynamicHref = isOverview
    ? `${categoryWithReplacedWhiteSpace}/snacks`
    : `/snacks/${ID}`;

  const overviewCategoryPrefix =
    isOverview && Category ? (
      <div className=" border-b border-gray-400 w-full mb-2 pb-2">
        <span className="text-gray-900 font-bold text-xl mb-2">{Category}</span>
      </div>
    ) : null;

  const nonOverviewHeadlineClassname = isOverview
    ? ""
    : "text-gray-900 font-bold text-xl mb-2";

  const overviewHeadlinePrefix = isOverview ? (
    <span className="text-xs text-gray-600">Letzte Meldung: </span>
  ) : null;

  return (
    <div
      key={ID}
      style={{ margin: "2em 0" }}
      className="max-w-sm w-full lg:max-w-full lg:flex"
    >
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div ref={sharePicRef}>
            <Sharepic text={Snack} source={URL}></Sharepic>
          </div>
          <div>
            <Link href={dynamicHref} as={dynamicHref} passHref>
              <a href={dynamicHref}>
                {overviewCategoryPrefix}
                <span className={nonOverviewHeadlineClassname}>
                  {overviewHeadlinePrefix}
                  <span className="font-bold">{Headline}</span>
                </span>
              </a>
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
            {Category.split(" ").map((category, _i) => (
              <span
                key={_i}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                #{category.toLowerCase()}
              </span>
            ))}
            {Tags.split(" ").map((tag, _i) => (
              <span
                key={_i}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                #{tag.toLowerCase()}
              </span>
            ))}
            {Location.split(" ").map((location, _i) => (
              <span
                key={_i}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
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
            console.log(sharePicRef.current.firstChild);
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
};

export default SnackListElement;
