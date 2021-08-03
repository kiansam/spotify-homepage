import Link from "next/link";
import styled from "styled-components";

function Body() {
  return (
    <Container>
      <Wrapper>
        <Wrap>
          <Div>
            <H1>Listening is everything</H1>
          </Div>
          <P>Millions of songs and podcasts. No credit card needed.</P>
          <Link href="/">
            <a>
              <Button>
                <Text>GET SPOTIFY FREE</Text>
              </Button>
            </a>
          </Link>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

export default Body;

const Container = styled.div`
  z-index: 3;
  background-color: #2a40ab;
  overflow: hidden;
  display: block;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  color: #1bd760;
  height: 100vh;
  text-align: center;
  display: flex;

  @media (min-width: 480px) {
    background-image: url(https://www-growth.scdn.co/static/home/bursts-tablet.svg);
    background-size: 153%;
    background-position: right 40% center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  background-color: rgb(41, 65, 171);
  background-image: url(https://www-growth.scdn.co/static/home/bursts-mobile.svg);
  background-position: center top 30%;
  background-repeat: no-repeat;
  background-size: 195%;
  height: 100vh;
  text-align: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: hidden;

  @media (min-width: 1200px) {
    background-image: url(https://www-growth.scdn.co/static/home/bursts.svg);
    background-size: 175%;
    background-position: 46% 4%;
    -webkit-box-pack: center;
    justify-content: center;
    min-height: 846px;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 50vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 40px;
  height: 100%;
`;

const Wrap = styled.div`
  display: flex;
  max-width: 650px;
  width: 100%;
  flex-direction: column;
  /* justify-content: space-between; */
  text-align: center;
  align-items: center;
`;

const Div = styled.div`
  display: block;
  text-align: center;
  z-index: 99;
  margin-top: 150px;

  @media (max-width: 1200px) {
    margin-top: 60px;
  }
`;

const H1 = styled.h1`
  font-weight: 900;
  line-height: 8rem;
  margin-bottom: 10px;
  width: 312px;
  padding-bottom: 16px;
  letter-spacing: -0.04em !important;
  font-family: spotify-circular, Helvetica, Arial, sans-serif;

  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  box-sizing: border-box;
  font-family: spotify-circular, Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: transparent;
  display: block;
  padding: 0px 0px 0.67em;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 900;
  /* letter-spacing: 10px; */
  font-size: 9rem;
  width: 100%;

  @media (min-width: 1200px) {
    font-size: 9rem;
    line-height: 9rem;
    width: 800px;
    text-indent: -3.3em;
    transform: translate(125px, 0px);
  }

  @media (max-width: 1200px) {
    font-size: 6.8rem;
    line-height: 7rem;
    /* padding-bottom: 20px; */
  }
  @media (max-width: 768px) {
    font-size: 6rem;
    font-weight: 800;
    line-height: 6rem;
  }
  @media (max-width: 630px) {
    font-size: 5.17rem;
    line-height: 5.3rem;
    margin-bottom: 15px;
  }
`;

const P = styled.p`
  font-size: 1.3rem;
  line-height: 1rem;
  font-weight: 500;
  max-width: 450px;
  margin-top: 5px;

  box-sizing: border-box;
  font-family: spotify-circular, Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: transparent;
  display: block;
  padding: 0px 0px 1em;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 400;
  letter-spacing: 0px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: -48px;

  @media (min-width: 480px) {
    font-size: 18px;
    line-height: 24px;
    /* padding-bottom: 40px; */
  }

  @media (min-width: 1200px) {
    width: 800px;
  }

  @media (max-width: 1200px) {
    max-width: 400px;
  }

  @media (min-width: 480px) {
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 10px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  border: none;
  border-radius: 60px;
  background-color: #1bd760;
  color: #2a40ab;
  transition: all 0.03s ease-in-out;
  touch-action: manipulation;
  transition-duration: 33ms;
  transition-property: background-color, border-color, color, box-shadow, filter,
    transform;
  user-select: none;
  vertical-align: middle;
  transform: translate3d(0px, 0px, 0px);
  padding: 0px;
  align-self: center;
  border-radius: 500px;
  font-size: inherit;
  padding: 1px 28px;

  &:hover {
    background-color: #2ce26d;
    transform: scale(1.05);
  }
`;

const Text = styled.p`
  font-weight: 900;
  font-size: 0.9rem;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
