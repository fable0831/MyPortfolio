import React from "react";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";
import { MdWeb } from "react-icons/md";
import useScroll from "./useScroll";
import { motion } from "framer-motion";
import { footerLogoAnimations, footerTextAnimations } from "animation";

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Foot ref={element}>
      <motion.span
        variants={footerTextAnimations}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        &copy; 2022. KimJooSang. All rights reserved.
      </motion.span>
      <motion.div
        className="footerIcons"
        variants={footerLogoAnimations}
        animate={controls}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <BsGithub />
        <MdWeb />
      </motion.div>
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
