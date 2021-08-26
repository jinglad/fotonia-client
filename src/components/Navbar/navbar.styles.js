import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(Link)`
  font-size: 50px;
  font-weight: 700;
  margin-left: 15px;
  color: white !important;
  text-decoration: none !important;
  font-family: "Unique";
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: white !important;
  font-weight: 600;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  font-size: 20px;
  :hover {
    background-color: #000;
    color: white !important;
  }
`;

export const LogButton = styled.button`
  /* color: black !important; */
  font-weight: 600;
  font-size: 20px;
  background-color: yellow !important;
`;
