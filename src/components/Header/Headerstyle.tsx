import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface NavLinkProps extends LinkProps {
  isSelected?: boolean;
}

export const Nav = styled.nav`
  background-color: #6c98da;
  padding: 5px;
  display: flex;
  align-items: center;
  height:50px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavLink = styled(Link)<NavLinkProps>`
  color: white;
  text-decoration: none;
  padding: 5px;
  background-color: ${(props) => (props.isSelected ? "#796BCD" : "transparent")};
  margin: 0 5px;
  ${(props) => props.isSelected && `padding-top: 20px; padding-bottom: 20px;`}
`;
