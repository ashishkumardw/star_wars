import React from 'react';

import {
  LogoContainer,
  Logo,
  Nav,
  NavMenu,
  NavLink,
  Bars,
} from './NavBarElements';

const Header = ({ toggle }) => {
  return (
    <>
      <LogoContainer>
        <Logo
          src={require('../../assets/images/Star_Wars_Logo.jpg').default}
          alt='Star Wars'
        />
      </LogoContainer>
      <Nav>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to={'/'}>Characters</NavLink>
          <NavLink to={'/'}>Species</NavLink>
          <NavLink to={'/'}>Planets</NavLink>
          <NavLink to={'/'}>Films</NavLink>
          <NavLink to={'/'}>Series</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;
