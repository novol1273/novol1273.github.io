import styled from "@emotion/styled";
import { type FC } from "react";
import Title from "../../../components/Title";

interface ProjectProps {}

const Treenity: FC<ProjectProps> = () => {
  return (
    <Root>
      <Title>Treenity</Title>
    </Root>
  );
};

const Root = styled.div``;

export default Treenity;
