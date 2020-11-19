import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  // SideBtnWrap,
  // SideBarRoute,
} from './SideBarElements';
const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="/">Home</SideBarLink>
        <SideBarLink to="/about">About</SideBarLink>
        <SideBarLink to="/random">Random</SideBarLink>
      </SideBarMenu>
      {/* <SideBtnWrap>
        <SideBarRoute to="/">blank button</SideBarRoute>
      </SideBtnWrap> */}
    </SideBarContainer>
  );
};

export default SideBar;
