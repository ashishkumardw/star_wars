import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const LogoContainer = styled.div`
  background: black;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    float: left;
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  display: flex;
  margin: 0 auto;
  height: 70px;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

export const Nav = styled.nav`
  background: black;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 6rem;
  height: 100%;
  cursor: pointer;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  box-sizing: border-box;

  @media screen and (max-width: 1233px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 1085px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 925px) {
    padding: 0 3rem;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.7rem;
    cursor: pointer;
  }
`;
