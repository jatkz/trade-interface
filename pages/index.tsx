import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styled from "styled-components";
import { Features } from "@headlessui/react/dist/utils/render";
import NavHeader from "@/components/home/navheader";
import {
  ButtonSix,
  FeaturesCenter,
  FeaturesDescription,
  FeaturesHeading,
  FeaturesLabel,
} from "@/components/common";
import Footer from "@/components/home/footer";
import MarketsSection from "@/components/home/markets-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>JATKZ TRADES</title>
        <meta
          name="description"
          content="opinionated simplified stock trading research"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=4" />
      </Head>
      <main>
        <PageBackground>
          <PageLayer></PageLayer>
          <NavHeader></NavHeader>

          <Content>
            <LandingPage>
              <Copy>
                <PageHeading>Research Trades</PageHeading>
                <PageSubheading>Heading</PageSubheading>
                <PageMove>
                  <PageLink>
                    <ButtonSix>Launch App</ButtonSix>
                    <a href="#" className="w-inline-block"></a>
                    <a href="#" className="w-inline-block"></a>
                    <a href="#" className="w-inline-block"></a>
                  </PageLink>
                </PageMove>
                <div></div>
              </Copy>
              <Screenshot>
                <Pagemove>
                  <div className="pageparallax"></div>
                </Pagemove>
              </Screenshot>
            </LandingPage>

            <ContentCentered>
              <MarketsSection></MarketsSection>
              <FeaturesSection>
                <FeaturesWidth>
                  <FeaturesCenter>
                    <FeaturesLabel>Heading</FeaturesLabel>
                    <FeaturesHeading>Heading</FeaturesHeading>
                    <FeaturesDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </FeaturesDescription>
                  </FeaturesCenter>
                  <FeaturesContainer>
                    <FeaturesGrid>
                      <FeaturesFlex>
                        <FeaturesShrink>
                          <FeaturesIcon></FeaturesIcon>
                        </FeaturesShrink>
                        <FeaturesLeft>
                          <FeaturesMainTitle>Quantify ROI</FeaturesMainTitle>
                          <FeaturesSubTitle>Low Fees</FeaturesSubTitle>
                        </FeaturesLeft>
                      </FeaturesFlex>
                      <FeaturesFlex>
                        <FeaturesShrink>
                          <FeaturesIcon></FeaturesIcon>
                        </FeaturesShrink>
                        <FeaturesLeft>
                          <FeaturesMainTitle>
                            Visualize History
                          </FeaturesMainTitle>
                          <FeaturesSubTitle>Low Fees</FeaturesSubTitle>
                        </FeaturesLeft>
                      </FeaturesFlex>
                      <FeaturesFlex>
                        <FeaturesShrink>
                          <FeaturesIcon></FeaturesIcon>
                        </FeaturesShrink>
                        <FeaturesLeft>
                          <FeaturesMainTitle>
                            Research Strategies
                          </FeaturesMainTitle>
                          <FeaturesSubTitle>Low Fees</FeaturesSubTitle>
                        </FeaturesLeft>
                      </FeaturesFlex>
                      <FeaturesFlex>
                        <FeaturesShrink>
                          <FeaturesIcon></FeaturesIcon>
                        </FeaturesShrink>
                        <FeaturesLeft>
                          <FeaturesMainTitle>
                            Structured Approach
                          </FeaturesMainTitle>
                          <FeaturesSubTitle>Low Fees</FeaturesSubTitle>
                        </FeaturesLeft>
                      </FeaturesFlex>
                      <FeaturesFlex>
                        <FeaturesShrink>
                          <FeaturesIcon></FeaturesIcon>
                        </FeaturesShrink>
                        <FeaturesLeft>
                          <FeaturesMainTitle>
                            During Market Hours
                          </FeaturesMainTitle>
                          <FeaturesSubTitle>Low Fees</FeaturesSubTitle>
                        </FeaturesLeft>
                      </FeaturesFlex>
                      <FeaturesFlex>
                        <FeaturesShrink>
                          <FeaturesIcon></FeaturesIcon>
                        </FeaturesShrink>
                        <FeaturesLeft>
                          <FeaturesMainTitle>
                            Going Long or Short
                          </FeaturesMainTitle>
                          <FeaturesSubTitle>Low Fees</FeaturesSubTitle>
                        </FeaturesLeft>
                      </FeaturesFlex>
                    </FeaturesGrid>
                  </FeaturesContainer>
                </FeaturesWidth>
              </FeaturesSection>
              <StatisticsContainer>
                <StatisticsNarrow>
                  <Copy2>
                    <AllCap>updated</AllCap>
                    <h1>Tracking consistently for 200+ stocks</h1>
                    <p>
                      We believe our trades should focus on only the top stocks
                      that have plenty liquidity and price deviation for swing
                      trading.
                    </p>
                  </Copy2>
                </StatisticsNarrow>
                <StatisticsSection>
                  <StatisticsRelative>
                    <StatisticsWidth>
                      <Center>
                        <StatisticsBackground>
                          <StatisticsItem>
                            <Description>Trading Volume</Description>
                            <StatisticsValue>
                              <div>$453,874,394</div>
                              <StatisticsLabel>LAST 24H</StatisticsLabel>
                            </StatisticsValue>
                          </StatisticsItem>
                          <StatisticsItem>
                            <Description>Trades</Description>
                            <StatisticsValue>
                              <div>128,743</div>
                              <StatisticsLabel>LAST 24H</StatisticsLabel>
                            </StatisticsValue>
                          </StatisticsItem>
                          <StatisticsItem>
                            <Description>Open Interest</Description>
                            <StatisticsValue>
                              <div>$156,120,085</div>
                              <StatisticsLabel>LAST 24H</StatisticsLabel>
                            </StatisticsValue>
                          </StatisticsItem>
                        </StatisticsBackground>
                      </Center>
                    </StatisticsWidth>
                  </StatisticsRelative>
                </StatisticsSection>
              </StatisticsContainer>
            </ContentCentered>
          </Content>

          <Footer></Footer>
        </PageBackground>
      </main>
    </>
  );
}

const PageBackground = styled.div``;

const PageLayer = styled.div`
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: -100;
  height: 100vh;
  background-color: #0e2622;
`;

const Content = styled.div`
  margin-top: 84px;
`;

const LandingPage = styled.div`
  display: flex;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 3rem;
  justify-content: center;
  align-items: center;
`;

const Copy = styled.div`
  display: flex;
  min-width: 42rem;
  margin-left: 3rem;
  padding-bottom: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageHeading = styled.h1`
  margin: 1rem 2rem 0px;
  color: #fafafd;
  font-size: 4.5rem;
  line-height: 1;
  font-weight: 700;
  text-align: left;
`;

const PageSubheading = styled.h2`
  margin-top: 1.5rem;
  color: #c8c7d8;
`;

const PageMove = styled.div`
  display: flex;
  margin-right: 1rem;
  margin-left: 1rem;
  flex-direction: column;
  align-items: center;
`;

const PageLink = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const Screenshot = styled.div`
  position: relative;
  top: 0px;
  right: -120px;
  z-index: -1;
  max-width: 1400px;
  margin-left: -90px;
`;

const Pagemove = styled.div`
  display: flex;
  margin-right: 1rem;
  margin-left: 1rem;
  flex-direction: column;
  align-items: center;
`;

const ContentCentered = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeaturesSection = styled.div`
  padding-top: 6rem;
  padding-bottom: 3rem;
`;

const FeaturesWidth = styled.div`
  max-width: 80rem;
  margin-right: 3rem;
  margin-left: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;
`;

const FeaturesContainer = styled.div`
  margin-top: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const FeaturesGrid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto auto;
  grid-template-rows: auto auto auto;
`;

const FeaturesFlex = styled.div`
  display: flex;
  max-width: 28rem;
  justify-content: flex-start;
  align-items: center;
  transition: opacity 200ms ease-out;
`;

const FeaturesShrink = styled.div`
  flex: 0 auto;
`;

const FeaturesIcon = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  background-color: #6966ff;
`;

const FeaturesLeft = styled.div`
  margin-left: 1rem;
`;

const FeaturesMainTitle = styled.p`
  margin-bottom: 0px;
  color: #fafafd;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

const FeaturesSubTitle = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0px;
  color: #807e98;
  font-size: 1.025rem;
`;

const StatisticsContainer = styled.div`
  padding-top: 6rem;
`;

const StatisticsNarrow = styled.div`
  padding-right: 2rem;
  padding-left: 2rem;
`;

const Copy2 = styled.div`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

const AllCap = styled.h3`
  text-transform: uppercase;
`;

const StatisticsSection = styled.div`
  margin-top: 2.5rem;
  padding-bottom: 4rem;
`;

const StatisticsRelative = styled.div`
  position: relative;
`;

const StatisticsWidth = styled.div`
  padding-right: 2rem;
  padding-left: 2rem;
`;

const Center = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

const StatisticsBackground = styled.div`
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-style: solid;
  border-width: 1px;
  border-color: #28283b;
  border-radius: 1rem;
  box-shadow: 0 0 0 40px rgba(105, 102, 255, 0.1);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`;

const StatisticsItem = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  border-right: 1px solid #28283b; // Fix the last element border 0px
  text-align: center;
`;

const Description = styled.div`
  margin-bottom: 0.5rem;
  color: #807e98;
  font-size: 1.075rem;
  line-height: 1.5rem;
`;

const StatisticsValue = styled.div`
  margin-right: 3rem;
  margin-left: 3rem;
  padding-top: 0.5rem;
  color: #fafafd;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

const StatisticsLabel = styled.div`
  margin-top: 1rem;
  color: rgba(128, 126, 152, 0.75);
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.05em;
`;
