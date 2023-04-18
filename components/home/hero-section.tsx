import Image from "next/image";
import styled from "styled-components";
import { ButtonSix, ButtonStandard } from "../common";

export default function HeroSection() {
  return (
    <Section>
      <Copy>
        <PageHeading>Research Trades</PageHeading>
        <PageSubheading>
          Analyze trends starting <TextWhite>for free</TextWhite>, no credit
          card required. <TextGrey>Upgrade for additonal features.</TextGrey>
        </PageSubheading>
        <PageMove>
          <PageLink>
            <ButtonStandard>Launch App</ButtonStandard>
            {/* <a href="#" className="w-inline-block"></a>
            <a href="#" className="w-inline-block"></a>
            <a href="#" className="w-inline-block"></a> */}
          </PageLink>
        </PageMove>
        <MarginYMove>
          <PromoCard>
            <PromoCardFirst
              src="/images/promo1.png"
              loading="lazy"
              width="128"
              height="256"
              alt=""
            ></PromoCardFirst>
            <PromoCardSecond
              src="/images/promo2.png"
              loading="lazy"
              width="128"
              height="256"
              alt=""
            ></PromoCardSecond>
            <PromoCardText>
              <PromoColumn>
                <h3>Coming to Mobile Soon</h3>
                <p>
                  Available for <b>IOS</b> in 2077. Coming to <b>Android</b>{" "}
                  early 2078!
                </p>
              </PromoColumn>
            </PromoCardText>
          </PromoCard>
        </MarginYMove>
      </Copy>
      <Screenshot>
        <PageMove>
          <PageParallax>
            <PageImage
              src="/images/screenshot1promo.png"
              loading="lazy"
              width="1020"
              height="720"
              alt=""
              layout="responsive"
            ></PageImage>
            <PageImageMobile
              src="/images/mobile2.png"
              loading="lazy"
              width="290"
              height="610"
              alt=""
              layout="responsive"
            ></PageImageMobile>
          </PageParallax>
        </PageMove>
      </Screenshot>
    </Section>
  );
}

const Section = styled.div`
  overflow-x: hidden;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media screen and (min-width: 1280px) {
    padding-left: 3rem;
    flex-direction: row;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media screen and (min-width: 640px) {
    padding-top: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

  @media screen and (min-width: 1280px) {
    min-width: 42rem;
    margin-left: 3rem;
    align-items: flex-start;
  }
`;

const PageHeading = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: 500;
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 1rem;

  opacity: 1;
  transform: none;

  @media screen and (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 1;
  }

  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;

const PageSubheading = styled.h2`
  font-size: 1.075rem;
  font-weight: 300;
  --tw-text-opacity: 1;
  color: rgba(200, 199, 216, var(--tw-text-opacity));
  margin: 1.5rem 2rem 0.75rem;
  text-align: center;
  max-width: 28rem;

  opacity: 1;
  transform: none;

  @media (min-width: 768px) {
    font-size: 1.075rem;
    max-width: 32rem;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`;

const TextWhite = styled.span`
  color: rgba(255, 255, 255, 1);
`;

const TextGrey = styled.span`
  color: rgba(128, 126, 152, 1);
`;

const PageMove = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;

  opacity: 1;
  transform: none;
`;

const PageLink = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  max-width: 24rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    margin-bottom: 1rem;
    max-width: none;
  }
`;

const Screenshot = styled.div`
  @media (min-width: 1280px) {
    position: relative;
    z-index: -1;
    top: 0px;
    right: -120px;
    max-width: 1400px;
    margin-left: -90px;
  }
`;

const PageParallax = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 4rem;

  @media (min-width: 1280px) {
    padding: 0px;
  }
  @media (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 0.5rem;
    padding-top: 0px;
  }

  @media (min-width: 640px) {
    padding: 4rem 6rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const PageImage = styled(Image)`
  display: none;
  border-radius: 1rem;

  @media (min-width: 640px) {
    display: inline;
  }
`;

const PageImageMobile = styled(Image)`
  display: inline;
  padding-bottom: 3rem;
  border-radius: 1rem;

  @media (min-width: 640px) {
    display: none;
  }
`;

const MarginYMove = styled(PageMove)`
  margin: 2rem 0;
`;

const PromoCard = styled.aside`
  background: url(/images/wave.svg) center center / 110%
    rgba(153, 153, 255, 0.05);
  border-radius: 1.5em;
  backdrop-filter: blur(6px);
  overflow: hidden;
  position: relative;
  padding: 2em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-auto-rows: 8rem;
  gap: 1.25rem;
  max-width: 68rem;
`;

const PromoCardImage = styled(Image)`
  min-width: 0px;
  width: 8rem;
  margin: -0.75rem 0px;
  border-radius: 1.5em;
`;

const PromoCardFirst = styled(PromoCardImage)`
  place-self: start;
`;

const PromoCardSecond = styled(PromoCardImage)`
  place-self: end;
`;

const PromoCardText = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 0.75rem 1.5rem;
  align-items: center;
  padding: 1em;
  max-width: 17rem;

  @media (min-width: 62rem) {
    padding-right: 0px;
  }
`;

const PromoColumn = styled.div`
  display: grid;
  text-align: start;
  gap: 0.5rem;
`;
