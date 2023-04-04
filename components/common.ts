import styled from "styled-components";

export const Blur = styled.div`
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background: none;
    backdrop-filter: blur(8px);
  }
`;

export const WButton = styled.a`
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898ec;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
`;

export const ButtonFour = styled(WButton)`
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  background-color: #0e2622;
`;

export const ButtonFive = styled(WButton)`
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #ce762b;
  font-size: 1.025rem;
`;

export const ButtonSix = styled(WButton)`
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #ce762b;
  color: #fafafd;
  font-size: 1.025rem;
`;

export const FeaturesCenter = styled.div`
  text-align: center;
`;

export const FeaturesLabel = styled.h3`
  color: #807e98;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const FeaturesHeading = styled.h2`
  margin-top: 0.5rem;
  color: #fafafd;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

export const FeaturesDescription = styled.p`
  margin-top: 0.75rem;
  margin-right: auto;
  margin-left: auto;
  color: #c8c7d8;
  line-height: 1.075rem;
`;
