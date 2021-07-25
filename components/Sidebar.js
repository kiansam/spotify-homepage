import styled from "styled-components";
import Link from "next/link";
import { Close } from "@styled-icons/evaicons-solid";

function Sidebar({ isOpen, toggle }) {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <Close size="48" title="Close" />
      </Icon>
      <Wrapper>
        <Menu>
          <Link href="/" to="about" onClick={toggle}>
            <a>
              <NavItem>Premium</NavItem>
            </a>
          </Link>
          <Link href="/" to="skills" onClick={toggle}>
            <a>
              <NavItem>Support</NavItem>
            </a>
          </Link>
          <Link href="/" to="footer" onClick={toggle}>
            <a>
              <NavItem>Download</NavItem>
            </a>
          </Link>
          <P>_</P>
          <Link href="/" to="footer" onClick={toggle}>
            Sign up
          </Link>
          <Link href="/" to="footer" onClick={toggle}>
            Log in
          </Link>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;

const Container = styled.aside`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 60%;
  background: #000;
  display: grid;
  top: 0;
  right: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "40%" : "100%")};

  @media (min-width: 990px) {
    display: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 3rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  color: #fff;
`;

const Wrapper = styled.div`
  color: #fff;
`;

const Menu = styled.ul`
  display: grid;
  font-size: 1rem;
  /* grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 100px); */
  text-align: left;
  justify-content: left;
  margin-left: auto;
  margin-right: auto;

  /* @media (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  } */
`;

const P = styled.p`
  padding-bottom: 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const NavItem = styled.p`
  font-size: 2.6rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  transition: ease-in 0.1s;
  cursor: pointer;

  &:hover {
    color: #1bd760;
  }
`;
