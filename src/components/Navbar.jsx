import React, { useState } from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useScroll from './useScroll';
import { navAnimations } from 'animation';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  const html = document.querySelector('html');
  html.addEventListener('click', (e) => setIsNavOpen(false));

  return (
    <Nav
      state={isNavOpen ? 1 : 0}
      ref={element}
      variants={navAnimations}
      transition={{ delay: 0.1 }}
      animate={controls}
    >
      <div className="container">
        <a href="#" className="brand">
          <img src={logo} alt="Logo" />
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={`links ${isNavOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  .container {
    margin: 0 2rem;
    width: 2rem;
    .toggle {
      display: none;
    }
    img {
      width: 13rem;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      li {
        :first-child {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .brand {
      }
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? '60%' : '0%')};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;
