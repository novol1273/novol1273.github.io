import styled from "@emotion/styled";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { LAYOUT_WIDTH } from "./constants";
import { ThemeProvider } from "./theme/ThemeProvider";
import { transition } from "./utils/transition-styled";

const App: FC = () => {
  return (
    <ThemeProvider>
      <AppRoot>
        <Sidebar />
        <WrapperContent>
          <Outlet />
        </WrapperContent>
      </AppRoot>
    </ThemeProvider>
  );
};

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background: ${(p) => p.theme.colorBackground};

  ${transition("background")};
`;

const AppRoot = styled.div`
  max-width: 1280px;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 240px auto;

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    grid-template-columns: auto;
  }
`;

export default App;
