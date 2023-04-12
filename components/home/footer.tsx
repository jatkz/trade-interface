import styled from "styled-components";
import Image from "next/image";

export default function Footer() {
  return (
    <FixedFooter>
      <FooterContainer>
        <a href="#" className="w-inline-block">
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
`;
