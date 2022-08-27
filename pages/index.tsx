import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import { Navbar, Text, Container, Image } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Text h1 size={"$8xl"} css={{ marginBlockEnd: "$0" }}>
          Medina CMS 🔧
        </Text>
        <Text h2 weight={"normal"} size={"$lg"} css={{ marginBlock: "$0" }}>
          A simple and fast content management system I use for my websites.
        </Text>
      </Container>
    </div>
  );
};

export default Home;
