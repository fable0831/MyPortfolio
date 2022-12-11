import React from 'react';
import styled from 'styled-components';

function Title({ name, left }) {
  return (
    <Div left={left}>
      <h1>{name}</h1>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  h1 {
    position: absolute;
    transform: translateX(-40%) translateY(20vw) rotate(-90deg);
    font-size: 7rem;
    text-transform: uppercase;
    color: var(--primary-color);
    font-weight: 200;
    margin-left: ${(props) => props.left};
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: none;
    }
  }
`;

export default Title;
