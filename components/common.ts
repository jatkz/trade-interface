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
  background-color: #471738;
  font-size: 1.025rem;
`;

export const ButtonSix = styled(WButton)`
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #471738;
  color: #fafafd;
  font-size: 1.025rem;
`;

export const ButtonStandard = styled.button`
  font-size: 1.025rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border-style: none;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;
  --tw-bg-opacity: 1;
  background-color: rgba(71, 23, 56, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));

  &:hover {
    --tw-scale-x: 1.1; /* Update translateX on hover */
    --tw-scale-y: 1.1; /* Update translateY on hover */
  }
`;

export const FeaturesCenter = styled.div`
  text-align: center;
`;

export const FeaturesLabel = styled.h3`
  color: #807e98;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const FeaturesHeading = styled.h2`
  margin-top: 0.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-size: 1.875rem;
  line-height: 2rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(250, 250, 253, var(--tw-text-opacity));

  @media (min-width: 640px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

export const FeaturesDescription = styled.p`
  margin-top: 0.75rem;
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.075rem;
  --tw-text-opacity: 1;
  color: rgba(200, 199, 216, var(--tw-text-opacity));

  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
