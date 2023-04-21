import FeaturesSection from "@/components/home/features-section";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import MarketsSection from "@/components/home/markets-section";
import NavHeader from "@/components/home/navheader";
import PricingPlan from "@/components/home/pricing-plan";
import StatisticsSection from "@/components/home/statistics-section";
import { FadeInEffect, FadeInMixin } from "@/components/withFadeIn";
import { Inter } from "@next/font/google";
import Head from "next/head";
import { useRef } from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const marketsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const pricingPlanRef = useRef<HTMLDivElement>(null);

  const refs = {
    markets: marketsRef,
    features: featuresRef,
    stats: statsRef,
    pricingPlan: pricingPlanRef,
  };

  const isVisible = FadeInEffect(200);

  return (
    <>
      <Head>
        <title>JATKZ TRADES</title>
        <meta
          name="description"
          content="curated simplified stock cryptocurrencies trading research visualization analysis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=5" />
      </Head>
      <main>
        <PageBackground>
          <PageLayer>
            <PageFeature>
              <PageOverlay></PageOverlay>
              <PageVideo
                preload="auto"
                loop
                muted
                autoPlay
                playsInline
                disablePictureInPicture
              >
                <PageSource
                  // src="/undersea-light.mp4"
                  src="/stars-space.mp4"
                  type="video/mp4"
                ></PageSource>
              </PageVideo>
            </PageFeature>
          </PageLayer>
          <NavHeader refs={refs}></NavHeader>

          <Content>
            <HeroSection></HeroSection>
            <ContentCentered className={isVisible ? "visible" : ""}>
              <div ref={marketsRef}>
                <MarketsSection></MarketsSection>
              </div>
              <div ref={featuresRef}>
                <FeaturesSection></FeaturesSection>
              </div>
              <div ref={statsRef}>
                <StatisticsSection></StatisticsSection>
              </div>
              <div ref={pricingPlanRef}>
                <PricingPlan></PricingPlan>
              </div>
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
  inset: 0px;
  height: 100vh;
  overflow: hidden;
  z-index: -100;
  /* filter: opacity(0.5) hue-rotate(150); */ // this did not work
`;

const PageFeature = styled.div`
  position: absolute;
  width: calc(177.778vh);
  height: calc(56.25vw);
  min-width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PageOverlay = styled.div`
  z-index: 1;
  background: #174726;
  opacity: 0.8;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const PageVideo = styled.video`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const PageSource = styled.source``;

const Content = styled.div`
  margin-top: 84px;
`;

const ContentCentered = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${FadeInMixin}
`;
