import styled from "styled-components";
import Header from "../components/Header";
import LandingArea from "../components/LandingArea";

const HomePage = styled.div`
  background-color: #0d0d2b;
  color: #fff;
  min-height: 100vh;
`;

const LandingSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <HomePage>
      <LandingSection>
        <Header />
        <LandingArea />
      </LandingSection>
    </HomePage>
  );
}
