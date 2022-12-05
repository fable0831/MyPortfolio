import React from "react";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";
import { MdWeb } from "react-icons/md";

function Footer() {
  return (
    <Foot>
      <span>&copy; 2022. KimJooSang. All rights reserved.</span>
      <div className="footerIcons">
        <BsGithub />
        <MdWeb />
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;
  .footerIcons {
    display: flex;
    gap: 2rem;
    svg,
    path {
      font-size: 2rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      :hover {
        color: var(--secondary-color);
      }
    }
  }
`;
export default Footer;
