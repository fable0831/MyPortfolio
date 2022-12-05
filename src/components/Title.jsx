import React from "react";
import styled from "styled-components";

function Title({ name }) {
  return (
    <Div>
      <h1>{name}</h1>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  h1 {
    position: absolute;
    transform: translateX(-44%) translateY(20vw) rotate(-90deg);
    font-size: 7rem;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 200;
  }
`;

export default Title;
