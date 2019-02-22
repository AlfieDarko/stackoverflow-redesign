import React from "react";
import { NavHeader, SideNavContainer, Menu } from "./styled";
import {
  Home,
  Tag,
  Users,
  Briefcase,
  User,
  HelpCircle,
  MessageCircle,
  Settings
} from "react-feather";
const SideNav = () => {
  return (
    <SideNavContainer>
      <NavHeader>menu</NavHeader>
      <Menu>
        <li>
          <Home size={19} /> <span>Home</span>
        </li>
        <li>
          <Tag size={19} />
          <span>Tags</span>
        </li>
        <li>
          <Users size={19} />
          <span>Users</span>
        </li>
        <li>
          <Briefcase size={19} />
          <span>Jobs</span>
        </li>
      </Menu>
      <NavHeader>dashboard</NavHeader>
      <Menu>
        <li>
          <User size={19} />
          <span>Profile</span>
        </li>
        <li>
          <HelpCircle size={19} />
          <span>Your questions</span>
        </li>
        <li>
          <MessageCircle size={19} />
          <span>Your answers</span>
        </li>
        <li>
          <Briefcase size={19} />

          <span>Settings</span>
        </li>
      </Menu>
    </SideNavContainer>
  );
};

export default SideNav;
