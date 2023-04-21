import styled from "styled-components";
import {
  FeaturesCenter,
  FeaturesDescription,
  FeaturesHeading,
  FeaturesLabel,
} from "../common";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MarketsSection() {
  const cardConfigs = [
    {
      name: "Ethereum",
      asset: "ETH",
      image: "eth",
      price: "$1,717.48",
      change: 3.49,
      volume: "$501.6M",
      rgb: [122, 87, 221] as [number, number, number],
    },
    {
      name: "Bitcoin",
      asset: "BTC",
      image: "btc",
      price: "$28,008.45",
      change: -2.29,
      volume: "$336.9M",
      rgb: [244, 155, 51] as [number, number, number],
    },
  ];
  return (
    <MarketsMain>
      <MarketsWidth>
        <FeaturesCenter>
          <FeaturesLabel>NOW LIVE</FeaturesLabel>
          <FeaturesHeading>Start Researching</FeaturesHeading>
          <FeaturesDescription>
            Continuously tracking the top stocks/cryptocurrencies.
          </FeaturesDescription>
        </FeaturesCenter>
        <MarketsContainer>
          {cardConfigs.map((config) => {
            return (
              <MarketCardElement
                key={config.asset}
                config={config}
              ></MarketCardElement>
            );
          })}
        </MarketsContainer>
      </MarketsWidth>
    </MarketsMain>
  );
}

const MarketCardElement = (props: {
  config: {
    name: string;
    asset: string;
    image: string;
    price: string;
    change: number;
    volume: string;
    rgb: [number, number, number];
  };
}) => {
  const { config } = props;
  return (
    <MarketFlex>
      <MarketCard r={config.rgb[0]} g={config.rgb[1]} b={config.rgb[2]}>
        <MarketsRow>
          <MarketsRound
            src={`/images/${config.image}.svg`}
            loading="lazy"
            width="36"
            height="36"
            alt=""
          ></MarketsRound>
          <MarketsCol>
            <MarketsName>{config.name}</MarketsName>
            <MarketsAsset>{config.asset}</MarketsAsset>
          </MarketsCol>
        </MarketsRow>
        <MarketsStyledRow>
          <MarketsPrice>{config.price}</MarketsPrice>
          <MarketsRightCol>
            <MarketsRightRow>
              <MarketsCardLabel>chg</MarketsCardLabel>
              <MarketsChange value={config.change}>
                {config.change}%
              </MarketsChange>
            </MarketsRightRow>
            <MarketsRightRow>
              <MarketsCardLabel>vol</MarketsCardLabel>
              <MarketsVolume>{config.volume}</MarketsVolume>
            </MarketsRightRow>
          </MarketsRightCol>
        </MarketsStyledRow>
      </MarketCard>
    </MarketFlex>
  );
};

const MarketsMain = styled.div`
  padding-bottom: 3rem;
`;

const MarketsWidth = styled.div`
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 640px) {
    margin-left: 3rem;
    margin-right: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const MarketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

const MarketFlex = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 36rem;
`;

interface RGB {
  r: number;
  g: number;
  b: number;
}

const MarketCard = styled.div`
  background: url("../images/dots.svg") center center;
  transition: all 0.1s ease-out 0s;
  padding: 1.25rem 1.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1.025rem;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgba(200, 199, 216, var(--tw-text-opacity));
  border-radius: 0.75rem;
  min-width: 280px !important;
  cursor: pointer;

  box-shadow: rgba(
      ${(props: RGB) => props.r},
      ${(props: RGB) => props.g},
      ${(props: RGB) => props.b},
      0.15
    )
    0px 0px 24px;
  border: 1px solid
    rgba(
      ${(props: RGB) => props.r},
      ${(props: RGB) => props.g},
      ${(props: RGB) => props.b},
      0.25
    );

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    backdrop-filter: blur(8px);
  }

  --tw-translate-y: 0;
  transform: translateY(var(--tw-translate-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;

  &:hover {
    --tw-translate-y: 4px;
    box-shadow: rgba(
        ${(props: RGB) => props.r},
        ${(props: RGB) => props.g},
        ${(props: RGB) => props.b},
        0.35
      )
      0px 0px 24px;
    border: 1px solid
      rgba(
        ${(props: RGB) => props.r},
        ${(props: RGB) => props.g},
        ${(props: RGB) => props.b},
        0.45
      );

    img,
    div {
      filter: brightness(105%);
    }
  }
`;

const MarketsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const MarketsRound = styled(Image)`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.75rem;
  border-radius: 1.5rem;
`;

const MarketsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MarketsName = styled.div`
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));
  font-size: 1.075rem;
`;

const MarketsAsset = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  --tw-text-opacity: 1;
  color: rgba(128, 126, 152, var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const MarketsStyledRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  width: 100%;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

const MarketsPrice = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));
  margin-top: 0.5rem;
  letter-spacing: 0.025em;
`;

const MarketsRightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 0.25rem;
`;

const MarketsRightRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;
  min-width: 90px;
`;

const MarketsCardLabel = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
  line-height: 1rem;
  --tw-text-opacity: 1;
  color: rgba(128, 126, 152, var(--tw-text-opacity));
`;

const MarketsChange = styled.div`
  color: ${(props: { value: number }) =>
    props.value >= 0 ? "rgb(22, 181, 127)" : "rgb(228, 85, 85)"};
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
