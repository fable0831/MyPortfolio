import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {});
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <Div>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
      {/* <Link to="/" className={`${visible ? "block" : "none"}`}>
         <FaChevronUp />
       </Link> */}
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: white;
      font-size: 1.3rem;
    }
  }
`;

export default ScrollToTop;
