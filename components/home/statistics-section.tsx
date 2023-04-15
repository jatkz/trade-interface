import styled from "styled-components";
import {
  FeaturesCenter,
  FeaturesDescription,
  FeaturesHeading,
  FeaturesLabel,
} from "../common";

export default function StatisticsSection() {
  return (
    <StatisticsContainer>
      <FeaturesCenter>
        <FeaturesLabel>updated</FeaturesLabel>
        <FeaturesHeading>Tracking consistently for 200+ stocks</FeaturesHeading>
        <FeaturesDescription>
          We believe our trades should focus on only the top stocks that have
          plenty liquidity and price deviation for swing trading.
        </FeaturesDescription>
      </FeaturesCenter>
      <Statistics>
        <StatisticsRelative>
          <StatisticsWidth>
            <Center>
              <StatisticsBackground>
                <StatisticsItem>
                  <Description>Trading Volume</Description>
                  <StatisticsValue>
                    $453,874,394
                    <StatisticsLabel>LAST 24H</StatisticsLabel>
                  </StatisticsValue>
                </StatisticsItem>
                <StatisticsItem>
                  <Description>Trades</Description>
                  <StatisticsValue>
                    128,743
                    <StatisticsLabel>LAST 24H</StatisticsLabel>
                  </StatisticsValue>
                </StatisticsItem>
                <StatisticsItem>
                  <Description>Open Interest</Description>
                  <StatisticsValue>
                    $156,120,085
                    <StatisticsLabel>LAST 24H</StatisticsLabel>
                  </StatisticsValue>
                </StatisticsItem>
              </StatisticsBackground>
            </Center>
          </StatisticsWidth>
        </StatisticsRelative>
      </Statistics>
    </StatisticsContainer>
  );
}

const StatisticsContainer = styled.div`
  padding-top: 4rem;

  @media (min-width: 640px) {
    padding-top: 6rem;
  }
`;

const Statistics = styled.div`
  margin-top: 2.5rem;
  padding-bottom: 3rem;

  @media (min-width: 640px) {
    padding-bottom: 4rem;
  }
`;

const StatisticsRelative = styled.div`
  position: relative;
`;

const StatisticsWidth = styled.div`
  position: relative;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    max-width: 60rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    max-width: none;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Center = styled.div`
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    max-width: none;
  }
`;

const StatisticsBackground = styled.div`
  transition: filter 0.4s ease-in-out 0s;
  border-radius: 0.75rem;
  border: 1px solid rgb(40, 40, 59);
  box-shadow: rgba(105, 102, 255, 0.1) 0px 0px 40px;

  @media (min-width: 1024px) {
    border-radius: 1rem;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    backdrop-filter: blur(8px);
  }
`;

const StatisticsItem = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(40, 40, 59, var(--tw-border-opacity));
  text-align: center;
  padding: 1.5rem 0 1.5rem 0;

  @media (min-width: 640px) {
    border-width: 0px 1px 0px 0px;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem;
  }

  &:hover {
    filter: brightness(1.15);
  }
`;

const Description = styled.span`
  margin-bottom: 0.5rem;
  font-size: 1.025rem;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgba(128, 126, 152, var(--tw-text-opacity));

  @media (min-width: 1024px) {
    font-size: 1.075rem;
  }
`;

const StatisticsValue = styled.span`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));

  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1;
  }

  @media (min-width: 769px) {
    padding-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 1024px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

const StatisticsLabel = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.05em;
  margin-top: 0.75rem;
  text-transform: uppercase;
  --tw-text-opacity: 1;
  color: rgba(128, 126, 152, var(--tw-text-opacity));
  opacity: 0.75;

  @media (min-width: 1024px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 1rem;
  }
`;
