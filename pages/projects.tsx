import React from "react";
import Navigation from "../components/Navigation";
import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import Project from "../components/Project";

const Projects = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Text h1 size={"$8xl"} css={{ marginBlockEnd: "$0" }}>
          Projects ⭐️
        </Text>
        <Text h3 weight={"normal"} size={"$lg"} css={{ marginBlock: "$0" }}>
          A brief list of projects that make use of Medina CMS.
        </Text>
      </Container>
      <Container css={{ marginBlockStart: "$12"}}>
        <Project title="medina.dev" image="/hero.jpeg" />
      </Container>
    </div>
  );
};

export default Projects;
