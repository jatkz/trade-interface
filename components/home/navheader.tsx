import styled from "styled-components";
import { Blur, ButtonStandard } from "../common";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const iconSize = 32;

export default function NavHeader({
  refs,
}: {
  refs: {
    [key: string]: React.RefObject<HTMLElement>;
  };
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuToggle, setMenuToggle] = useState(true);
  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
    setShowMenu(!showMenu);
  };

  const scrollToSection = (section: React.RefObject<HTMLElement>) => {
    return () => {
      if (section.current) {
        section.current?.scrollIntoView({ behavior: "smooth" });
      }
      if (showMenu) {
        handleToggleMenu();
      }
    };
  };

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

      <MenuToggle>
        <MenuToggleIcon show={!menuToggle} onClick={handleToggleMenu}>
          <HiOutlineX size={iconSize}></HiOutlineX>
        </MenuToggleIcon>
        <MenuToggleIcon show={menuToggle} onClick={handleToggleMenu}>
          <HiOutlineMenu size={iconSize}></HiOutlineMenu>
        </MenuToggleIcon>
      </MenuToggle>
      <Navigation>
        <HeaderNavigation>
          <MenuButton onClick={scrollToSection(refs["markets"])}>
            <MenuSpan>
              <MenuTitle>Top Stocks</MenuTitle>
            </MenuSpan>
          </MenuButton>
          <MenuButton onClick={scrollToSection(refs["features"])}>
            <MenuSpan>
              <MenuTitle>Features</MenuTitle>
            </MenuSpan>
          </MenuButton>
          <MenuButton onClick={scrollToSection(refs["stats"])}>
            <MenuSpan>
              <MenuTitle>Stats</MenuTitle>
            </MenuSpan>
          </MenuButton>
          <MenuButton onClick={scrollToSection(refs["pricingPlan"])}>
            <MenuSpan>
              <MenuTitle>Pricing Plans</MenuTitle>
            </MenuSpan>
          </MenuButton>
          <div>
            <ButtonStandard>Launch</ButtonStandard>
          </div>
        </HeaderNavigation>
      </Navigation>
      {showMenu && (
        <MobileNavigation>
          <HeaderNavigationMobile>
            <MenuButton onClick={scrollToSection(refs["markets"])}>
              <MenuSpan>
                <MenuTitle>Top Stocks</MenuTitle>
              </MenuSpan>
            </MenuButton>
            <MenuButton onClick={scrollToSection(refs["features"])}>
              <MenuSpan>
                <MenuTitle>Features</MenuTitle>
              </MenuSpan>
            </MenuButton>
            <MenuButton onClick={scrollToSection(refs["stats"])}>
              <MenuSpan>
                <MenuTitle>Stats</MenuTitle>
              </MenuSpan>
            </MenuButton>
            <MenuButton onClick={scrollToSection(refs["pricingPlan"])}>
              <MenuSpan>
                <MenuTitle>Pricing Plans</MenuTitle>
              </MenuSpan>
            </MenuButton>
            <ButtonStandard>Trade</ButtonStandard>
          </HeaderNavigationMobile>
        </MobileNavigation>
      )}
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

const MenuToggle = styled.div`
  @media (max-width: 768px) {
    display: flex;
    position: relative;
    right: initial;
    top: initial;
  }

  border: none;
  background-color: transparent;
  color: rgb(255, 255, 255);
  display: none;
  z-index: 9999;
  width: 30px;
  height: 30px;
  margin-right: 6px;
  justify-content: center;
  align-items: center;
`;

const MenuToggleIcon = styled.div`
  opacity: 1;
  display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

const Navigation = styled.div`
  @media (max-width: 768px) {
    display: none;
    position: fixed;
    top: 84px;
    left: 0px;
    width: 100%;
    height: calc(100vh - 84px);
    background-color: rgb(21, 21, 34);
  }
`;

const HeaderNavigation = styled.nav`
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

const MobileNavigation = styled.div`
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 84px;
    left: 0px;
    width: 100%;
    height: calc(100vh - 84px);
    background-color: rgb(21, 21, 34);
  }
`;

const HeaderNavigationMobile = styled.nav`
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
