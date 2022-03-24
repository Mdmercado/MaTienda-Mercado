import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import "./NavBar.css";

function NavBar() {
	return (
		<Navbar fixed="top" variant="dark" bg="dark" expand="lg">
			<Container className="justify-content-center">
				<Navbar.Brand href="#inicio">
					<div className="navbar-logo"></div>
				</Navbar.Brand>
				<Navbar.Brand href="#inicio" className="navbar-title">
					MaTienda
				</Navbar.Brand>
				<NavbarToggle aria-controls="nav-collapse" />
				<NavbarCollapse id="nav-collapse" className="justify-content-center">
					<Nav as="ul">
						<Nav.Item as="li">
							<Nav.Link href="#nosotros">Quiénes Somos</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<NavDropdown
								title="PRODUCTOS"
								id="basic-nav-dropdown"
								className="bg-black">
								<NavDropdown.Item href="#mates" className="dropdown-item">
									Mates
								</NavDropdown.Item>
								<NavDropdown.Item href="#yerbas" className="dropdown-item">
									Yerbas Importadas
								</NavDropdown.Item>
								<NavDropdown.Item href="#termos" className="dropdown-item">
									Termos
								</NavDropdown.Item>
								<NavDropdown.Item href="#materos" className="dropdown-item">
									Materos
								</NavDropdown.Item>
							</NavDropdown>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link href="#comprar">Cómo Comprar</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link href="#contacto">Contacto</Nav.Link>
						</Nav.Item>
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
