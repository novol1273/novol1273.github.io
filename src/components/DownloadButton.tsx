import styled from "@emotion/styled";
import { LAYOUT_WIDTH } from "../constants.ts";
import { transition } from "../utils/transition-styled.ts";

const ThemeSwitch = () => {
  return (
    <Button download href="/CV.pdf">
      <div>
        <Sphere
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"
          />
        </Sphere>
      </div>
    </Button>
  );
};

const Button = styled.a`
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
  right: 0;
  transform: translateX(38px);
  top: 42px;
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
  }

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    transform: translateX(0);
    border-radius: 0 0 0 15px;
  }
`;

const Sphere = styled.svg`
  position: relative;
  width: 20px;
  height: 24px;
  border-radius: 50%;
  transform-origin: center;
  ${transition(["background-color", "color", "width", "height"])};
`;

export default ThemeSwitch;
