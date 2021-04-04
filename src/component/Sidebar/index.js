import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='characters' onClick={toggle}>
            Characters
          </SidebarLink>
          <SidebarLink to='species' onClick={toggle}>
            Species
          </SidebarLink>
          <SidebarLink to='planets' onClick={toggle}>
            Planets
          </SidebarLink>
          <SidebarLink to='films' onClick={toggle}>
            Films
          </SidebarLink>
          <SidebarLink to='series' onClick={toggle}>
            Series
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
