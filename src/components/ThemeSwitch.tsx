import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { LAYOUT_WIDTH } from "../constants.ts";
import { useTheme } from "../theme/ThemeProvider.tsx";
import { transition } from "../utils/transition-styled.ts";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme.name === "dark";

  const sunRays = Array.from({ length: 8 }).map((_, i) => (
    <SunRay key={i} index={i} />
  ));

  return (
    <Button onClick={toggleTheme}>
      <div>
        <Sphere>
          <Shadow dark={isDark} />
          {sunRays}
        </Sphere>
      </div>
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  width: 38px;
  height: 38px;
  box-shadow: none;
  border: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colorPrimary};
  //background: red;
  right: 0;
  transform: translateX(38px);
  top: 0;
  border-radius: 0 15px 15px 0;
  z-index: 1;
  ${transition(["transform", "border-radius"])};

  & > div {
    ${transition("transform")};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: ${(p) => p.theme.colorPrimaryHover};

    & > div {
      transform: rotateZ(-15deg);
    }
  }

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    transform: translateX(0);
    border-radius: 0 0 0 15px;
  }
`;

const Sphere = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  background-color: ${(p) => p.theme.colorBgLight};
  border-radius: 50%;
  transform-origin: center;

  ${(p) =>
    p.theme.name === "dark" &&
    css`
      width: 14px;
      height: 14px;
    `};

  ${transition(["background-color", "color", "width", "height"])};
`;

const SunRay = styled.div<{ index: number }>`
  position: absolute;
  width: 4px;
  height: 2px;
  background-color: ${(p) => p.theme.colorBgLight};
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform-origin: center;

  ${transition(["background-color", "color", "transform", "width"])};

  ${(p) => css`
    transform: translate(-50%, -50%) rotate(${p.index * 45}deg) translateX(10px);
  `}

  ${(p) =>
    p.theme.name === "dark" &&
    css`
      width: 0;
    `};
`;

const Shadow = styled.div<{ dark?: boolean }>`
  width: 16px;
  height: 16px;
  background-color: ${(p) => p.theme.colorPrimary};
  border-radius: 50%;
  transform: translateX(12px) translateY(4px) scale(0);
  z-index: 3;

  ${transition(["background-color", "color", "transform"])};

  ${(p) =>
    p.dark &&
    css`
      opacity: 1;
      transform: translateX(4px) translateY(-4px) scale(1);
    `};
`;

export default ThemeSwitch;
