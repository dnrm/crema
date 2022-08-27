import React from "react";
import { Navbar, Image } from "@nextui-org/react";

const Navigation = () => {
  return (
    <Navbar isBordered variant={"sticky"} maxWidth="fluid">
      <Navbar.Brand>
        <Image
          src={"https://cdn.medina.dev/favicon.png"}
          alt="Medina Logo"
        ></Image>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
