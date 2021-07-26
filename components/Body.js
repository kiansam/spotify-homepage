import styled from "styled-components";

function Body() {
  return (
    <Container>
      <Wrapper>
        <Wrap>
          <H1>
            Listening is <br />
            everything
          </H1>
          <P>Millions of songs and podcasts. No credit card needed.</P>
          <Button>
            <Text>GET SPOTIFY FREE</Text>
          </Button>
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
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  color: #1bd760;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  line-height: 8rem;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    font-size: 7.5rem;
  }
`;

const P = styled.p`
  font-size: 1.1rem;
  line-height: 1.2rem;
  font-weight: 500;
  max-width: 450px;
  margin-top: 10px;
`;

const Button = styled.button`
  align-items: center;
  text-align: center;
  margin-top: 30px;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 60px;
  background-color: #1bd760;
  color: #2a40ab;
  transition: all 0.05s ease-in-out;

  &:hover {
    background-color: #2ce26d;
    transform: scale(1.05);
  }
`;

const Text = styled.p`
  font-weight: 900;
  font-size: 0.9rem;
`;
