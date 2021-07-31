import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <Container>
      <Nav>
        <Col>
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
        </Col>
        <Links></Links>
      </Nav>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #000;
  padding: 50px 0 20px;
  font-size: 16px;
  font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
  font-weight: 400;
  display: block;

  @media (min-width: 992px) {
    padding: 80px 0 50px;
  }

  &:hover {
    color: #1ed760;
  }
`;

const Nav = styled.nav`
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const Col = styled.div`
  padding: 0 15px;
  display: block;
  box-sizing: border-box;

  @media (min-width: 992px) {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  @media (min-width: 992px) {
    min-height: 346px;
  }

  @media (min-width: 768px) {
    width: 16.66666667%;
  }

  @media (min-width: 992px) {
    width: 16.66666667%;
  }
`;

const Logo = styled.div`
  padding: 0;
  color: #fff;
  display: inline-block;
  height: 27px;
  width: 89px;

  @media (min-width: 992px) {
    height: 40px;
    width: 132px;
  }
`;

const Links = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  @media (min-width: 768px) {
    -webkit-flex-direction: row;
    flex-direction: row;
  }
  @media (min-width: 992px) {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`;
