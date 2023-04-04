import styled from "styled-components";
import {
  FeaturesCenter,
  FeaturesDescription,
  FeaturesHeading,
  FeaturesLabel,
} from "../common";
import Image from "next/image";

export default function MarketsSection() {
  return (
    <MarketsMain>
      <MarketsWidth>
        <FeaturesCenter>
          <FeaturesLabel>NOW LIVE</FeaturesLabel>
          <FeaturesHeading>Start Researching</FeaturesHeading>
          <FeaturesDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </FeaturesDescription>
        </FeaturesCenter>
        <MarketsContainer>
          <MarketFlex>
            <MarketCard>
              <MarketsRow>
                <MarketsRound
                  src="/images/eth.svg"
                  loading="lazy"
                  width="36"
                  height="36"
                  alt=""
                ></MarketsRound>
                <MarketsCol>
                  <MarketsName>Ethereum</MarketsName>
                  <MarketsAsset>ETH</MarketsAsset>
                </MarketsCol>
              </MarketsRow>
              <MarketsStyledRow>
                <MarketsPrice>$1,717.48</MarketsPrice>
                <MarketsRightCol>
                  <MarketsRightRow>
                    <MarketsCardLabel>chg</MarketsCardLabel>
                    <MarketsChange>3.49%</MarketsChange>
                  </MarketsRightRow>
                  <MarketsRightRow>
                    <MarketsCardLabel>vol</MarketsCardLabel>
                    <MarketsVolume>$501.6M</MarketsVolume>
                  </MarketsRightRow>
                </MarketsRightCol>
              </MarketsStyledRow>
            </MarketCard>
          </MarketFlex>
        </MarketsContainer>
      </MarketsWidth>
    </MarketsMain>
  );
}

const MarketsMain = styled.div`
  padding-bottom: 3rem;
`;

const MarketsWidth = styled.div`
  margin-right: 3rem;
  margin-left: 3rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
`;

const WContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
`;

const MarketsContainer = styled(WContainer)`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const MarketFlex = styled.a`
  display: flex;
  max-width: 36rem;
  justify-content: center;
  align-items: center;
`;

const MarketCard = styled.div`
  display: flex;
  min-width: 280px;
  margin: 0.5rem;
  padding: 1.25rem 1.5rem;
  flex-direction: column;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(122, 87, 221, 0.25);
  border-radius: 0.75rem;
  background-image: url("../images/dots.svg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 24px rgba(122, 87, 221, 0.15);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  transition: opacity 100ms ease-out;
  color: #c8c7d8;
  font-size: 1.025rem;
  line-height: 1.5rem;
`;

const MarketsRow = styled.div`
  display: flex;
  align-items: center;
`;

const MarketsRound = styled(Image)`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.75rem;
  border-radius: 1.5rem;
  background-position: 50% 50%;
  background-size: auto;
`;

const MarketsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MarketsName = styled.div`
  color: #fafafd;
  font-size: 1.075rem;
`;

const MarketsAsset = styled.div`
  color: #807e98;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.05px;
  text-transform: uppercase;
`;

const MarketsStyledRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1.25rem;
  flex-direction: row;
  justify-content: space-between;
`;

const MarketsPrice = styled.div`
  margin-top: 0.5rem;
  color: #fafafd;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.025em;
`;

const MarketsRightCol = styled.div`
  display: flex;
  margin-top: 0.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const MarketsRightRow = styled.div`
  display: flex;
  min-width: 90px;
  margin-left: 20px;
  justify-content: space-between;
  align-items: center;
`;

const MarketsCardLabel = styled.div`
  color: #807e98;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const MarketsChange = styled.div`
  color: #16b57f;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const MarketsVolume = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
