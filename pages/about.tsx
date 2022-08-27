import { Container, Text } from "@nextui-org/react";
import React from "react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Text h1 size={"$8xl"} css={{ marginBlockEnd: "$0" }}>
          About 🌱
        </Text>
        <Text h3 weight={"normal"} size={"$lg"} css={{ marginBlock: "$0" }}>
          Medina CMS is a simple and fast content management system I use for my
          own projects. These include my personal portfolio website, my blog,
          and my projects page. Medina CMS is built using Next.js, TypeScript,
          and MongoDB. It&apos;s currently in development and is not ready for
          production use.
        </Text>
      </Container>
    </div>
  );
};

export default About;
