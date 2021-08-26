import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarConatiner = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding-right: 40px;
  box-shadow: 0 0 15px lightgray;
`;

export const SidebarList = styled.li`
  margin-bottom: 1.5rem;
`;

export const SidebarLink = styled(Link)`
  text-decoration: none !important;
  color: black !important;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  :hover {
    /* color: aqua !important; */
    background: #104646;
    color: white !important;
  }
`;

export const SidebarLogo = styled(Link)`
  font-size: 50px;
  font-weight: 700;
  margin-left: 15px;
  color: black !important;
  text-decoration: none !important;
  font-family: "Unique";
  &:hover {
    color: black !important;
    text-decoration: none !important;
  }
`;
