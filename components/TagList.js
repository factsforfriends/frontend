import React, { useRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.table`
  width: 100%;
`;

const TagList = ({ snacks }) => {
    const tags = []
    snacks.map(snack => {
        snack.Category.split(" ").map(category => {
            if (!tags.includes(category.toLowerCase()) && category) {
                tags.push(category.toLowerCase())
            }
        })
    })

    console.log(tags)

    const categories = tags.map(tag => 
        <span
        className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          <Link href={{ pathname: '/', query: { tag: tag.toLowerCase() }}}><a>#{tag.toLowerCase()}</a></Link>
        </span>
    );

    const alle = (
        <span
        className="inline-block bg-white-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          <Link href={{ pathname: '/', query: { tag: "" }}}><a>#Alle</a></Link>
        </span>
      )

  return (
    <Container>
        {alle}
        {categories}
        {/* {categories.map((tag, _i) => (
        <span
        key={_i}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          <Link href={{ pathname: '/', query: { tag: tag.toLowerCase() }}}><a>#{tag.toLowerCase()}</a></Link>
        </span>
      ))} */}
    </Container>
  );
};

export default TagList;

TagList.propTypes = {
    snacks: PropTypes.array.isRequired
  };
  