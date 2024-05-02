import styled from "styled-components";
import Header from "../components/Header";
import LandingArea from "../components/LandingArea";
import InsightsRow from "../components/InsightsRow";
import DescriptionRow from "../components/DescriptionRow";
import CenteredTitle from "../components/CenteredTitle";
import CalculatorForm from "../components/CalculatorForm";
import Showcase from "../components/Showcase";
import InvestSmart from "../components/InvestSmart";
import DetailedStatistics from "../components/DetailedStatistics";
import GrowYourProfit from "../components/GrowYourProfit";
import NewletterForm from "../components/NewletterForm";
import Footer from "../components/Footer/Footer";

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
  position: relative;
`

const FormBackground = styled.div`
  position: absolute;
  top: 454px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F8F9FB;
`

const ShowcaseSection = styled(Section)`
  background: linear-gradient(180deg, #F8F9FB 0%, #FAFBFF 100%);
  padding: 6.25rem 0;
`

const InverseColorCenteredTitle = styled(CenteredTitle)`
  color: #0d0d2b;
`

const MarketingSection = styled(Section)`
  padding: 6.25rem 0;
  background-color: #2B076E;
`

const NewsLetterSection = styled(Section)`
  background: linear-gradient(180deg, #2B076E 0%, #0D0D2B 100%);
  height: auto;
  min-height: unset;
  padding: 5.5rem 0;
`

const FooterSection = styled(Section)`
  min-height: unset;
  background-color: #0D0D2B;
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
        <FormBackground />
        <CenteredTitle
          title="Check how much you can earn"
          subtitle="Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet."
        />
        <CalculatorForm />
      </FormSection>
      <ShowcaseSection>
        <InverseColorCenteredTitle title="Trade securely and market the high growth cryptocurrencies." />
        <Showcase />
      </ShowcaseSection>
      <MarketingSection>
        <CenteredTitle title="Market sentiments, portfolio, and run the infrastructure of your choice" />
        <InvestSmart />
        <DetailedStatistics />
        <GrowYourProfit />
      </MarketingSection>
      <NewsLetterSection>
        <NewletterForm />
      </NewsLetterSection>
      <FooterSection>
        <Footer />
      </FooterSection>
    </HomePage>
  );
}
