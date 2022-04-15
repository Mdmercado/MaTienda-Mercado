import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";

function NavBar({ cant }) {
	return (
		<Navbar className="mb-5" variant="dark" bg="dark" expand="lg">
			<Container className="justify-content-center">
				<Navbar.Brand as={Link} to="/">
					<div className="navbar-logo"></div>
				</Navbar.Brand>
				<Navbar.Brand as={Link} to="/" className="navbar-title">
					MaTienda
				</Navbar.Brand>
				<Navbar.Brand href="#cart" className="navbar-cart">
					<CartWidget cant={cant} />
				</Navbar.Brand>
				<NavbarToggle aria-controls="nav-collapse" />
				<NavbarCollapse id="nav-collapse" className="justify-content-center">
					<Nav as="ul">
						<Nav.Item as="li">
							<Nav.Link as={Link} to="/">
								inicio
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<NavDropdown
								title="PRODUCTOS"
								id="basic-nav-dropdown"
								className="bg-black">
								<NavDropdown.Item
									as={Link}
									to="/category/mate"
									className="dropdown-item">
									Mates
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/category/bombilla"
									className="dropdown-item">
									Bombillas
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/category/termo"
									className="dropdown-item">
									Termos
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
