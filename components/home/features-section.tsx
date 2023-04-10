import styled from "styled-components";
import {
  FeaturesCenter,
  FeaturesDescription,
  FeaturesHeading,
  FeaturesLabel,
} from "../common";
import {
  HiBeaker,
  HiLightningBolt,
  HiChartBar,
  HiCubeTransparent,
  HiOutlineClock,
  HiPresentationChartLine,
} from "react-icons/hi";

export default function FeaturesSection() {
  const featureElements = [
    {
      title: "Quantify ROI",
      subtitle: "Low Fees",
      icon: HiBeaker,
    },
    {
      title: "Visualize History",
      subtitle: "Low Fees",
      icon: HiChartBar,
    },
    {
      title: "Research Strategies",
      subtitle: "Low Fees",
      icon: HiLightningBolt,
    },
    {
      title: "Structured Approach",
      subtitle: "Low Fees",
      icon: HiCubeTransparent,
    },
    {
      title: "During Market Hours",
      subtitle: "Low Fees",
      icon: HiOutlineClock,
    },
    {
      title: "Going Long or Short",
      subtitle: "Low Fees",
      icon: HiPresentationChartLine,
    },
  ];

  return (
    <Features>
      <FeaturesWidth>
        <FeaturesCenter>
          <FeaturesLabel>Heading</FeaturesLabel>
          <FeaturesHeading>Heading</FeaturesHeading>
          <FeaturesDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </FeaturesDescription>
        </FeaturesCenter>
        <FeaturesContainer>
          <FeaturesGrid>
            {featureElements.map((feature) => {
              return (
                <FeatureElement
                  key={feature.title}
                  title={feature.title}
                  subtitle={feature.subtitle}
                  icon={feature.icon}
                ></FeatureElement>
              );
            })}
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesWidth>
    </Features>
  );
}

const FeatureElement = (props: any) => {
  return (
    <FeaturesFlex>
      <FeaturesShrink>
        <FeaturesIcon>
          <props.icon></props.icon>
        </FeaturesIcon>
      </FeaturesShrink>
      <FeaturesLeft>
        <FeaturesMainTitle>{props.title}</FeaturesMainTitle>
        <FeaturesSubTitle>{props.subtitle}</FeaturesSubTitle>
      </FeaturesLeft>
    </FeaturesFlex>
  );
};

const Features = styled.div`
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
  @media (min-width: 640px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const FeaturesGrid = styled.dl`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    gap: 2.5rem 2rem;
  }

  opacity: 1;
`;

const FeaturesFlex = styled.div`
  transition: filter 0.2s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 28rem;

  opacity: 1;
  &:hover {
    filter: brightness(125%);
  }

  @media (max-width: 768px) {
    --tw-space-y-reverse: 0;
    margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));
  }
`;

const FeaturesShrink = styled.div`
  flex-shrink: 0;
`;

const FeaturesIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgba(71, 23, 56, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));
`;

const FeaturesLeft = styled.div`
  margin-left: 1rem;
`;

const FeaturesMainTitle = styled.dt`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));
`;

const FeaturesSubTitle = styled.dd`
  margin-top: 0.25rem;
  font-size: 1.025rem;
  --tw-text-opacity: 1;
  color: rgba(128, 126, 152, var(--tw-text-opacity));
`;
