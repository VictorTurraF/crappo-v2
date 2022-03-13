import styled from "styled-components";
import Header from "../components/Header";

const HomePage = styled.div`
  background-color: #0d0d2b;
  color: #fff;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <HomePage>
      <Header />
    </HomePage>
  );
}
