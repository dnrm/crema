import React from "react";
import { Card, Text, Image } from "@nextui-org/react";

type Props = {
  title: string;
  image: string;
};

const Project = ({ title, image }: Props) => {
  return (
    <Card variant="bordered" css={{ backgroundColor: "$accents0" }}>
      <Card.Body css={{ px: "$10"}}>
        <Text h2 size={"$2xl"} css={{ marginBlock: "$0" }}>
          {title}
        </Text>
        <Text css={{ marginBlock: "$0" }}>
          This project makes use of Medina CMS in order to display pages for
          each of the projects i&apos;ve done.
        </Text>
      </Card.Body>
    </Card>
  );
};

export default Project;
