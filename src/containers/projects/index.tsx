import styled from "@emotion/styled";
import { type FC } from "react";
import { Outlet } from "react-router-dom";

const ProjectLayout: FC = () => {
  return (
    <Root>
      <Outlet />
    </Root>
  );
};

const Root = styled.div`
  max-width: 690px;
`;

export default ProjectLayout;
