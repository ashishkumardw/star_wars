import React from 'react';

import { Logo, Nav, NavMenu, NavLink } from './NavBarElements';

const Header = () => {
  return (
    <Nav>
      {/*<Bars />*/}
      <Logo
        src={require('../../assets/images/Star_Wars_Logo.jpg').default}
        alt='Star Wars'
      />
      <br />
      <br />
      <NavMenu>
        <NavLink to={'/'}>All Characters</NavLink>
        <NavLink to={'/'}>Characters</NavLink>
        <NavLink to={'/'}>Species</NavLink>
        <NavLink to={'/'}>Planets</NavLink>
        <NavLink to={'/'}>Films</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Header;
