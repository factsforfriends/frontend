import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.table`
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background: rgb(0, 159, 227);
  background: linear-gradient(
    45deg,
    rgba(0, 159, 227, 1) 0%,
    rgba(0, 207, 227, 1) 100%
  );
  border-radius: 25px;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  color: white;
`;

const Icon = styled.td`
  width: 30%;
  text-align: right;
  font-size: 100px;
  padding: 5px;
`;

const Highlight = styled.span`
  background: yellow;
  color: black;
  font-weight: bold;
  padding: 0px 10px;
  border-radius: 15px;
`;

const Text = styled.td`
  padding: 15px;
`;

const Source = styled.td`
  width: 100%;
  height: 50px;
  font-size: 20px;
  text-align: right;
`;

const Sharepic = ({ text, source }) => {
  return (
    <Container>
      <tbody>
        <tr>
          <Text>{text}</Text>
          <Icon>
            <i className="fas fa-heartbeat"></i>
          </Icon>
        </tr>
        <tr style={{ textAlign: "right" }}>
          <Source>Quelle: {source}</Source>
        </tr>
      </tbody>
    </Container>
  );
};

export default Sharepic;

Sharepic.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string
};
