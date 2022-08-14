import React from "react";
import { useRef } from "react";
import "../page/truenav.css";
import "../main/homes.css";
import Typical from "react-typical";
//import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Togglevisible from "./toggle";

export default function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  


  return (
    <header>
      {""}
      <nav ref={navRef}>
        <Link to="#" className="#"></Link>
        <a href="/indexmain">Home</a>
        <a href="/home">Resume</a>
        <a href="/honestly">Honestly</a>
        <a href="/contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <div id="results-detail" className="Detail">
        <Togglevisible>
        EMAIL: nplodthong@myseneca.ca | TEL: 437-970-9999
        </Togglevisible>  
      </div>
    </header>
  );
}
/*


export const Nav = styled.nav`
  background: #333;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 960px) / 2);
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  test-decoration: none;
  padding: 0 1 rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #333;
  }
`
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    curosr: pointer;
  }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -21px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 25px;
  @media screen and(max-width: 960px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
border-radius: 2px;
background: #333;
padding: 5px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2 ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
}`
const Navbar = () =>  {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Me
          </NavLink>
          <NavLink to="/honestly" activeStyle>
            Honestly
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/resume">My Resume</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
export default Navbar;

*/
