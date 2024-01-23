"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./header.scss";
import { usePathname } from "next/navigation";
import menuItems from "./header.json";

const DashboardHeader = () => {
	const pathName = usePathname();

	return (
		<Navbar expand={false} className="bg-danger mb-3" collapseOnSelect>
			<Container>
				<Navbar.Brand href="#">Product Manager</Navbar.Brand>
				<Navbar.Toggle aria-controls={`dashboardOffcanvas`} />
				<Navbar.Offcanvas
					id={`dashboardOffcanvas`}
					aria-labelledby={`dashboardOffcanvasLabel`}
					placement="start"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`dashboardOffcanvasLabel`}>
							Product Manager
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{menuItems.map((items) => (
								<Nav.Link href={items.url} as={Link} key={items.id}
								
							active={pathName === items.url}	
							//active olma durumu kontrol edildi
								
								>
									{items.title}
								</Nav.Link>
							))}

							<Nav.Link>Signout</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};
export default DashboardHeader;
