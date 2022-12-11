import React from 'react';
import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';
import { MdWeb } from 'react-icons/md';
import useScroll from './useScroll';
import { motion } from 'framer-motion';
import { footerLogoAnimations, footerTextAnimations } from 'animation';

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Foot ref={element}>
      <motion.span
        variants={footerTextAnimations}
        animate={controls}
        transition={{
          delay: 0.02,
          type: 'tween',
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
          type: 'tween',
          duration: 0.8,
        }}
      >
        <a href="https://github.com/fable0831" target="_blankank">
          <BsGithub />
        </a>
        <a href="https://velog.io/@fable0831" target="_blankank">
          <MdWeb />
        </a>
      </motion.div>
    </Foot>
  );
}

const Foot = styled.footer`
  padding-top: 1px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;
  .footerIcons {
    display: flex;
    gap: 2rem;
    a {
      color: white;
      svg,
      path {
        font-size: 2.5rem;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        :hover {
          color: var(--secondary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;
export default Footer;
