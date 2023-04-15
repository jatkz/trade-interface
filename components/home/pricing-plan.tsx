import styled from "styled-components";
import {
  ButtonStandard,
  FeaturesCenter,
  FeaturesDescription,
  FeaturesHeading,
  FeaturesLabel,
} from "../common";

export default function StatisticsSection() {
  return (
    <PricingContainer>
      <FeaturesCenter>
        <FeaturesLabel>start for free</FeaturesLabel>
        <FeaturesHeading>Simple Pricing Tiers</FeaturesHeading>
        <FeaturesDescription>
          Choose a pricing plan that fits your needs. We offer a free plan to
          get started and a additional when you are ready to scale.
        </FeaturesDescription>
      </FeaturesCenter>
      <Pricing>
        <PricingWidth>
          <Center>
            <PricingBackground>
              <PricingItem>
                <TierName>Hobby</TierName>
                <Description>
                  For individuals trying out trading for an unlimited period
                </Description>
                <PricingValueSection>
                  <PricingValue>Free</PricingValue>
                </PricingValueSection>
                <PricingFeatureList>
                  <PricingFeature>
                    Limited access to stocks and cryptocurrency data
                  </PricingFeature>
                  <PricingFeature>
                    Basic charting and technical analysis tools
                  </PricingFeature>
                  <PricingFeature>
                    Access to a selection of pre-built trading strategies
                  </PricingFeature>
                  <PricingFeature>
                    Basic portfolio tracking and alerts
                  </PricingFeature>
                  <PricingFeature>
                    Access to online help center and community forum
                  </PricingFeature>
                </PricingFeatureList>
                <PricingButton>Get Started</PricingButton>
              </PricingItem>
              <PricingItem>
                <TierName>Professional</TierName>
                <Description>
                  For individual users who want increased functionality
                </Description>
                <PricingValueSection>
                  <PricingValue>$9</PricingValue>
                  <PricingPerMonth>/month</PricingPerMonth>
                </PricingValueSection>
                <PricingFeatureList>
                  <PricingFeature>
                    Comprehensive access to stocks and cryptocurrency data
                  </PricingFeature>
                  <PricingFeature>
                    Advanced charting, technical analysis, and custom indicators
                  </PricingFeature>
                  <PricingFeature>
                    Ability to create and backtest custom trading strategies
                  </PricingFeature>
                  <PricingFeature>
                    Advanced portfolio management with risk analysis and
                    optimization
                  </PricingFeature>
                  <PricingFeature>
                    Share trading ideas and strategies with a limited number of
                    users
                  </PricingFeature>
                  <PricingFeature>
                    Limited API access with basic data endpoints
                  </PricingFeature>
                  <PricingFeature>Priority email support</PricingFeature>
                </PricingFeatureList>
                <PricingButton>Buy Now</PricingButton>
              </PricingItem>
              <PricingItem>
                <TierName>Enterprise</TierName>
                <Description>
                  For teams and larger organizations with advanced needs
                </Description>
                <PricingValueSection>
                  <PricingValue>Custom</PricingValue>
                </PricingValueSection>
                <PricingFeatureList>
                  <PricingFeature>
                    Complete access to all available stocks and cryptocurrency
                    data
                  </PricingFeature>
                  <PricingFeature>
                    Premium analytics suite, including AI-driven insights and
                    predictive tools
                  </PricingFeature>
                  <PricingFeature>
                    Unlimited strategy creation, backtesting, and optimization
                  </PricingFeature>
                  <PricingFeature>
                    Customizable dashboards, multi-portfolio support, and
                    advanced reporting
                  </PricingFeature>
                  <PricingFeature>
                    Collaborate and share with unlimited users, including team
                    workspace functionality
                  </PricingFeature>
                  <PricingFeature>
                    Full API access with advanced data endpoints, integration,
                    and automation
                  </PricingFeature>
                  <PricingFeature>
                    24/7 dedicated support, including phone and live chat
                  </PricingFeature>
                </PricingFeatureList>
                <PricingButton>Contact Sales</PricingButton>
              </PricingItem>
            </PricingBackground>
          </Center>
        </PricingWidth>
      </Pricing>
    </PricingContainer>
  );
}

const PricingContainer = styled.div`
  padding-top: 4rem;

  @media (min-width: 640px) {
    padding-top: 6rem;
  }
`;

const Pricing = styled.div`
  margin-top: 2.5rem;
  padding-bottom: 3rem;

  @media (min-width: 640px) {
    padding-bottom: 4rem;
  }
`;

const PricingWidth = styled.div`
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

const PricingBackground = styled.div`
  transition: filter 0.4s ease-in-out 0s;
  box-shadow: rgba(105, 102, 255, 0.1) 0px 0px 40px;
  display: flex;
  gap: 0.5rem;
  @media (max-width: 898px) {
    flex-direction: column;
  }
`;

const PricingItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(40, 40, 59, var(--tw-border-opacity));
  text-align: center;
  padding: 1.5rem 0.5rem 1.5rem 0.5rem;
  border-radius: 0.75rem;

  @media (min-width: 640px) {
    border-width: 1px;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem;
  }

  &:hover {
    filter: brightness(1.05);
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    backdrop-filter: blur(8px);
  }
`;

const TierName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));
`;

const Description = styled.span`
  height: 3.5rem;
  margin-bottom: 1rem;
  font-size: 1.025rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(128, 126, 152, var(--tw-text-opacity));

  @media (min-width: 1024px) {
    font-size: 1.075rem;
    height: 3rem;
  }
`;

const PricingValueSection = styled.p`
  @media (min-width: 769px) {
  }

  @media (min-width: 1024px) {
  }
`;

const PricingValue = styled.span`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));

  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const PricingPerMonth = styled.span`
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

const PricingFeatureList = styled.ul`
  flex-grow: 1;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.05rem;
  color: rgba(200, 199, 216, 1);
  /* margin-bottom: 1rem; */
`;

const PricingFeature = styled.li`
  display: flex;
  column-gap: 0.5rem;
  margin-top: 0.75rem;
`;

const PricingButton = styled(ButtonStandard)`
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  --tw-bg-opacity: 1;
  color: rgba(71, 23, 56, var(--tw-bg-opacity));
  border-color: rgba(71, 23, 56, var(--tw-bg-opacity));
  border: 1px solid;
  --tw-text-opacity: 1;
  background-color: rgba(250, 250, 253, var(--tw-text-opacity));
`;
