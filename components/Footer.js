import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <Container>
      <Nav>
        <Spotify>
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
        </Spotify>
        <Columns>
          <Col>
            <Co>Company</Co>
            <Links>
              <Link href="/">
                <a>About</a>
              </Link>
            </Links>
            <Links>
              <Link href="/">
                <a>Jobs</a>
              </Link>
            </Links>
            <Links>
              <Link href="/">
                <a>For the Record</a>
              </Link>
            </Links>
          </Col>

          {/* 2 */}
          <Col>
            <Co>Communities</Co>
            <Links>
              <Link href="/">
                <a>For Artists</a>
              </Link>
            </Links>
            <Links>
              <Link href="/">
                <a>Developers</a>
              </Link>
            </Links>
            <Links>
              <Link href="/">
                <a>Advertising</a>
              </Link>
            </Links>
            <Links>
              <Link href="/">
                <a>Investors</a>
              </Link>
            </Links>
            <Links>
              <Link href="/">
                <a>Vendors</a>
              </Link>
            </Links>
          </Col>

          {/* 3 */}
          <Col>
            <Co>Useful links</Co>
            <Links>
              <Link href="/">
                <a>Support</a>
              </Link>
            </Links>
            <Links>
              <Link href="/">
                <a>Web Player</a>
              </Link>
            </Links>
            <Links>
              <Link href="/">
                <a>Free Mobile App</a>
              </Link>
            </Links>
          </Col>
        </Columns>

        {/* ! */}

        <Social>
          <Icons>
            <Icon>
              <Link href="/">
                <a>
                  <span></span>
                </a>
              </Link>
            </Icon>
          </Icons>
        </Social>
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
  color: #fff;

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

const Spotify = styled.div`
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

const Columns = styled.div`
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

const Col = styled.dl`
  padding: 0 15px;
  margin: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  @media (min-width: 768px) {
    -webkit-flex: 1 0;
    flex: 1 0;
  }
`;

const Co = styled.dt`
  margin: 50px 0 22px;
  color: #919496;
  font-size: 12px;
  font-weight: 900;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;

  @media (min-width: 992px) {
    margin: 20px 0;
  }
`;

const Links = styled.dd`
  margin: 0;
  display: block;
  /* margin-inline-start: 40px; */

  a {
    padding: 3px 0 15px;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-decoration: none;
    color: #fff;
  }
`;

const Social = styled.div`
  margin: 120px 15px 15px;
  display: block;

  @media (min-width: 992px) {
    margin: 0 15px 0 auto;
  }
`;

const Icons = styled.ul`
  margin: 20px 0 0;
  padding: 0;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const Icon = styled.li`
  margin-right: 15px;
  display: inline-block;
  text-align: -webkit-match-parent;

  a {
    border-radius: 50%;
    background-color: #222326;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    overflow: hidden;
    width: 44px;
    height: 44px;
    color: #fff;
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;

    @media (min-width: 992px) {
      width: 54px;
      height: 54px;
    }

    span {
    }
  }
`;
