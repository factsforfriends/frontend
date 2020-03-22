import React, { useRef } from "react";
import replace from "lodash/replace";
import Link from "next/link";
import Sharepic from "./Sharepic";
import htmlToImage from "html-to-image";

const SnackListElement = ({
  snack,
  isOverview,
  clipboardStatus,
  isMinimalView,
  copyToClipboard
}) => {
  const sharePicRef = useRef();
  let image;

  const share = (title, url) => {
    if (navigator.share) {
      navigator
        .share({ text: title + "\n" + url })
        .then(() => console.log("shared"))
        .catch(e => console.error(e));
    } else {
      console.log("copied URL to clipboard");
      copyToClipboard(url);
    }
  };

  const generatePic = node => {
    htmlToImage
      .toPng(node)
      .then(function(dataUrl) {
        image = dataUrl;
      })
      .catch(function(error) {
        console.error("oops, something went wrong!", error);
      });
  };

  const shareFile = (title, url) => {
    var img = new Image();
    img.src = image;

    const shareData = { files: [img] };
    console.log(navigator.canShare && navigator.canShare(shareData));

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("shared"))
        .catch(e => console.error(e));
    }
  };

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
      <div
        className={`${
          isMinimalView ? "" : "border-b border-gray-400"
        } w-full mb-2 pb-2`}
      >
        <Link href={dynamicHref} as={dynamicHref} passHref>
          <a href={dynamicHref}>
            <span className="text-gray-900 font-bold text-xl mb-2">
              {Category}
            </span>
          </a>
        </Link>
      </div>
    ) : null;

  const nonOverviewHeadlineClassname = isOverview
    ? ""
    : "text-gray-900 font-bold text-xl mb-2";

  const overviewHeadlinePrefix = isOverview ? (
    <span className="text-xs text-gray-600">Letzte Meldung: </span>
  ) : null;

  const tagList = (
    <div className="flex items-center">
      <div className="text-sm">
        {Category.split(" ").map((category, _i) => (
          <span
            key={_i}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            <Link
              href={{ pathname: "/", query: { tag: category.toLowerCase() } }}
            >
              <a>#{category.toLowerCase()}</a>
            </Link>
          </span>
        ))}
        {Tags.split(" ").map((tag, _i) => (
          <span
            key={_i}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            <Link href={{ pathname: "/", query: { tag: tag.toLowerCase() } }}>
              <a>#{tag.toLowerCase()}</a>
            </Link>
          </span>
        ))}
        {Location.split(" ").map((location, _i) => (
          <span
            key={_i}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            <Link
              href={{ pathname: "/", query: { tag: location.toLowerCase() } }}
            >
              <a>#{location.toLowerCase()}</a>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
  const sourceElement = (
    <a
      className="text-sm text-gray-600 flex items-center"
      href={URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        borderLeft: "5px solid #F6E05E",
        marginLeft: "10px",
        padding: "10px",
        marginBottom: "10px"
      }}
    >
      Quelle: {URL}
    </a>
  );

  const headlineWithSnackElement = (
    <>
      <div>
        <Link href={dynamicHref} as={dynamicHref} passHref>
          <a href={dynamicHref}>
            <span className={nonOverviewHeadlineClassname}>
              {overviewHeadlinePrefix}
              <span className="font-bold">{Headline}</span>
            </span>
          </a>
        </Link>
      </div>
      <p className="text-gray-700 text-base">{Snack}</p>
    </>
  );

  const sharePicWrapper = (
    <div ref={sharePicRef}>
      {/* <Sharepic text={Snack} source={URL}></Sharepic> */}
      <img
        style={{ borderRadius: "15px" }}
        src={
          "https://raw.githubusercontent.com/flattenandflausch/snacks-data/master/img/" +
          snack.ID +
          ".jpg"
        }
      ></img>
    </div>
  );

  // const containerClassNames = isMinimalView
  //   ? " p-4 flex flex-col justify-between leading-normal"
  //   : "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal";
  const containerClassNames = isMinimalView
    ? " p-4 flex flex-col justify-between leading-normal mb-4"
    : "bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal";

  const wrapperClassName = isMinimalView ? `` : `mb-4`;
  return (
    <div
      key={ID}
      className={"max-w-sm w-full lg:max-w-full lg:flex " + wrapperClassName}
    >
      <div
        style={{ border: "0 2px 6px 0 hsla(0, 0%, 0%, 0.2)" }}
        className={containerClassNames}
      >
        <div className="mb-8">
          {overviewCategoryPrefix}
          {isMinimalView ? sharePicWrapper : null}
          {isMinimalView ? null : headlineWithSnackElement}
        </div>
        {sourceElement}
        {tagList}
        <button
          style={{ margin: "15px 5px" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            share(Snack, URL);
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
