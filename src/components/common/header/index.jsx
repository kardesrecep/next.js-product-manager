"use client";

import React from "react";
import { Container,Nav,Navbar } from "react-bootstrap";
import menuItems from "./menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Header = () => {
/*   const pathName=usePathname();
  console.log("pathName: "+pathName) */
  return (
    <Navbar expand="lg" className="bg-info" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Cozzy Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => (
              <Nav.Link key={item.id} href={item.url} as={Link} >{item.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Link href="/dashboard">Dashboard</Link>
      </Container>
    </Navbar>
   
  );
};

export default Header;
