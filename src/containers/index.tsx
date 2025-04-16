import { type FC } from "react";
import About from "../components/About";
import Links from "../components/Links";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendations";
import Skills from "../components/Skils";

interface IndexPageProps {}

const IndexPage: FC<IndexPageProps> = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Links />
      <Recommendations />
    </>
  );
};

export default IndexPage;
