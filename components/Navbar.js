import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";

function Navbar() {
  return (
    <Container>
      <Wrapper>
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
        <Menu>
          <Link href="">
            <a>
              <NavItem>Premium</NavItem>
            </a>
          </Link>
          <Link href="/">
            <NavItem>Support</NavItem>
          </Link>
          <Link href="/">
            <NavItem>Download</NavItem>
          </Link>
          <P>|</P>
          <Link href="/">
            <NavItem>Sign up</NavItem>
          </Link>
          <Link href="/">
            <NavItem>Log in</NavItem>
          </Link>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  z-index: 99;
  color: #fff;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const Logo = styled.div`
  padding: 0;
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  /* flex-flow: row nowrap; */
  height: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0px;
  position: relative;
  margin-right: 0;
  margin-left: 40%;
  font-weight: 700;

  @media (max-width: 990px) {
    display: none;
  }
`;

const NavItem = styled.p`
  padding: 16px;
  transition: ease-in 0.1s;
  cursor: pointer;

  &:hover {
    color: #1bd760;
  }
`;

const P = styled.p`
  padding: 15px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;