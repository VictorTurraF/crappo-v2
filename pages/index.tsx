import styled from "styled-components";
import Header from "../components/Header";
import LandingArea from "../components/LandingArea";
import InsightsRow from "../components/InsightsRow";
import DescriptionRow from "../components/DescriptionRow";
import CenteredTitle from "../components/CenteredTitle";
import CalculatorForm from "../components/CalculatorForm";

const HomePage = styled.div`
  background-color: #0d0d2b;
  color: #fff;
`;

const Section = styled.div`
  min-height: 100vh;
`

const LandingSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const DescriptionSection = styled(Section)`
  padding: 3rem 0 6.25rem;
`

const FormSection = styled(Section)`
  padding-top: 6.25rem;
`

export default function Home() {
  return (
    <HomePage>
      <LandingSection>
        <Header />
        <LandingArea />
      </LandingSection>
      <DescriptionSection>
        <InsightsRow />
        <DescriptionRow />
      </DescriptionSection>
      <FormSection>
        <CenteredTitle />
        <CalculatorForm />
      </FormSection>
    </HomePage>
  );
}
