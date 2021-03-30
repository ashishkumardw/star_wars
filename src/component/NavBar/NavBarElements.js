import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  height: 70px;
`;

export const Nav = styled.nav`
  background: black;
  height: 150px;
  display: block;
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
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin: 0 75px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  box-sizing: border-box;
`;
// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
