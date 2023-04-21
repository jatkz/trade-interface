import styled from "styled-components";
import Image from "next/image";
import { FadeInEffect, FadeInMixin } from "../withFadeIn";

export default function Footer() {
  const isVisible = FadeInEffect(100);
  return (
    <FixedFooter className={isVisible ? "visible" : ""}>
      <FooterContainer>
        <a
          href="https://github.com/jatkz/trade-interface"
          target="_blank"
          rel="noopener noreferrer"
          className="w-inline-block"
        >
          <FooterImage
            src="/images/iconmonstr-github-1.svg"
            loading="lazy"
            width="24"
            height="24"
            alt=""
          ></FooterImage>
        </a>
      </FooterContainer>
    </FixedFooter>
  );
}

const FixedFooter = styled.div`
  ${FadeInMixin}
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #28283b;
  border-radius: 96px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
`;

const FooterImage = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: transparent;

  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-rotate: 0;

  transform: rotate(var(--tw-rotate)) scaleX(var(--tw-scale-x))
    scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;

  &:hover {
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
    --tw-rotate: 30deg;
  }
`;
