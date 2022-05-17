/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import CartWidget from "../Cartwidget/CartWidget";
import "./NavBar.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
function NavBar() {
  const { productsAdd, showTotal, showcart } = useContext(CartContext);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    showTotal();
  }, [productsAdd]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "categorias");
    getDocs(itemCollection).then((item) => {
      setCategory(
        item.docs.map((doc) => ({ name: doc.data.name, ...doc.data() }))
      );
    });
  }, [showcart]);

  return (
    <Navbar className="mb-3" variant="dark" bg="dark" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Brand as={Link} to="/">
          <div className="navbar-logo"></div>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/" className="navbar-title">
          MaTienda
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/cart" className="navbar-cart">
          {showcart && <CartWidget />}
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
                className="bg-black"
              >
                {category &&
                  category.map((cat) => (
                    <NavDropdown.Item
                      as={Link}
                      to={`/category/${cat.name}`}
                      className="dropdown-item"
                      key={cat.id}
                    >
                      {cat.name}s
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to={"/howtobuy"}>
                Cómo Comprar
              </Nav.Link>
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
