import styled from "styled-components";
import { Blur, ButtonFive, ButtonFour, ButtonStandard } from "../common";
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
      <div id="nav">
        <NavTag>
          <MenuButton>
            <MenuSpan>
              <MenuTitle>Top Stocks</MenuTitle>
            </MenuSpan>
          </MenuButton>
          <MenuButton>
            <MenuSpan>
              <MenuTitle>Features</MenuTitle>
            </MenuSpan>
          </MenuButton>
          <MenuButton>
            <MenuSpan>
              <MenuTitle>Stats</MenuTitle>
            </MenuSpan>
          </MenuButton>
          <MenuButton>
            <MenuSpan>
              <MenuTitle>Pricing Plans</MenuTitle>
            </MenuSpan>
          </MenuButton>
          <div>
            <ButtonStandard>Launch</ButtonStandard>
          </div>
        </NavTag>
        <NavMobileMessage>Scroll to view more →</NavMobileMessage>
        <NavMobileTradeButtonWrapper>
          <ButtonStandard>Trade</ButtonStandard>
        </NavMobileTradeButtonWrapper>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Blur)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 1.5rem;
  width: 100%;
  max-height: 84px;
  min-height: 84px;
  top: 0px;
  z-index: 3;
  position: fixed;
  transition: all 0.2s ease-in-out 0s;
  background: none;
  border-bottom: 1px solid rgb(19, 19, 34);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.a`
  display: flex;
  align-items: center;
  z-index: 9999;
  transition: transform 0.2s ease-out 0s;
`;

const TextBlock = styled.div`
  color: #a1a1a1;
  font-size: 28px;
  position: relative;
  margin-left: 1.25rem;
`;

const NavTag = styled.div`
  opacity: 1;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease 0s;
`;

const Image2 = styled(Image)`
  border-radius: 6px;
`;

const MenuButton = styled.button`
  margin: 0px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
  list-style: none;
  background: none;
  height: auto;
  padding: 10px 12px !important;
`;

const MenuSpan = styled.span`
  text-decoration: none;
  margin: 0px;
  border-radius: 0.5rem;
  font-weight: 400;
  width: fit-content;
  cursor: pointer;
`;

const MenuTitle = styled.p`
  margin-right: 0.25rem;
  color: rgb(200, 199, 216);
  transition: color 0.2s ease-in-out 0s;

  &:hover {
    color: inherit;
  }
`;

const NavMobileMessage = styled.p`
  display: none;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  border: 1px solid rgb(40, 40, 59);
  --tw-text-opacity: 1;
  color: rgba(200, 199, 216, var(--tw-text-opacity));
  padding: 0.5rem 1rem;
  --tw-bg-opacity: 1;
  background-color: rgba(26, 26, 39, var(--tw-bg-opacity));
  border-radius: 1.5rem;
  z-index: 50;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const NavMobileTradeButtonWrapper = styled.div`
  display: none;
`;
