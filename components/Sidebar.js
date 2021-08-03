import styled from "styled-components";
import Link from "next/link";
import { Close } from "@styled-icons/evaicons-solid";
import Image from "next/image";

function Sidebar({ isOpen, toggle }) {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Wrapper>
        <Icon onClick={toggle}>
          <Close size="48" title="Close" />
        </Icon>

        <Menu>
          <Link
            href="https://www.spotify.com/us/premium/"
            to="about"
            onClick={toggle}
          >
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
            <a>
              <NavItem className="small"> Sign up</NavItem>
            </a>
          </Link>
          <Link href="/" to="footer" onClick={toggle}>
            <a>
              <NavItem className="small"> Log in </NavItem>
            </a>
          </Link>
          <Logo>
            <Link href="/">
              <a>
                <Image
                  src="/images/Spotify-logo.svg"
                  height={100}
                  width={180}
                  alt="logo"
                />
              </a>
            </Link>
          </Logo>
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
  display: block;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "40%" : "100%")};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (min-width: 990px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  color: #fff;
  display: block;
  padding-left: 1px;
  margin-bottom: 10px;
`;

const Icon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  background: transparent;
  font-size: 2rem;
  cursor: default;
  outline: none;
  color: #fff;
`;

const Menu = styled.ul`
  display: block;
  font-size: 1rem;
  text-align: left;
  justify-content: left;
  margin-left: auto;
  margin-right: auto;
`;

const P = styled.p`
  font-size: 3.3rem;
  /* padding-bottom: 10px; */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 200;
  line-height: 3rem;
`;

const NavItem = styled.p`
  padding-top: 10px;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  transition: all ease-in-out 0.1s;
  cursor: pointer;
  line-height: 2.5rem;

  &.small {
    font-size: 1.9rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #e0e0e0;
  }

  &:hover {
    color: #1bd760;
  }
`;

const Logo = styled.div`
  padding-top: 90px;
  /* padding-left: 10px; */

  /* @media (max-width: 990px) {
    width: 300px;
  } */
`;
