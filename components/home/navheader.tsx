import styled from "styled-components";
import { Blur, ButtonFive, ButtonFour } from "../common";
import Image from "next/image";

export default function NavHeader() {
  return (
    <HeaderContainer>
      <Logo>
        <StyledIcon>
          <Image2
            src="/images/trader_logo.png"
            loading="lazy"
            width="55"
            height="45"
            alt=""
          ></Image2>
        </StyledIcon>
        <TextBlock>JZ-JT</TextBlock>
      </Logo>

      <div className="menutoggle"></div>
      <div className="nav">
        <NavTag>
          <ButtonFour>Pricing Plans</ButtonFour>
          <div>
            <ButtonFive>Launch</ButtonFive>
          </div>
        </NavTag>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Blur)`
  position: fixed;
  top: 0px;
  z-index: 3;
  display: flex;
  width: 100%;
  max-height: 84px;
  min-height: 84px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #28283b;
  opacity: 1;
  transition: opacity 50ms ease-in-out;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.a`
  display: flex;
  align-items: center;
  max-width: 100%;
  display: inline-block;
`;

const TextBlock = styled.div`
  color: #a1a1a1;
  font-size: 28px;
`;

const NavTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image2 = styled(Image)`
  border-radius: 6px;
`;
