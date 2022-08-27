import React from "react";
import Navigation from "../components/Navigation";
import { Container, Text, Button, Image } from "@nextui-org/react";

const Login = () => {
  return (
    <div>
      <Navigation />
      <Container
        alignItems="center"
        justify="center"
        display="flex"
        direction="column"
      >
        <Image
          src={"https://cdn.medina.dev/favicon.png"}
          alt="Medina Logo"
          css={{
            border: "1px black solid",
            mt: "$16",
            borderRadius: "50%",
            textShadow: "$lg",
          }}
        ></Image>
        <Text h1 size={80} css={{ marginBlock: "$0" }}>
          Login
        </Text>
        <Text>Log in to manage content. You can login with Google. </Text>
        <Button type="button" ghost color={"gradient"} bordered>
          Log In
        </Button>
      </Container>
    </div>
  );
};

export default Login;
