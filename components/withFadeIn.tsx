import { useEffect, useState } from "react";
import { css } from "styled-components";

export const FadeInEffect = (waitTime: number) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, waitTime);
  });

  return isVisible;
};

export const FadeInMixin = css`
  opacity: 0;
  transition: opacity 1s ease-out;

  &.visible {
    opacity: 1;
  }
`;
