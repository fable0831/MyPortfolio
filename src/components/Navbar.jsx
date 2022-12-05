import React from "react";
import styled from "styled-components";
import logo from "assets/logo.png";
import { GiHamBurgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="toggle"></div>
      </div>
      <div className="links">
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

const Nav = styled.nav`
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
`;

export default Navbar;
