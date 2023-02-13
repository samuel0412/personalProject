import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../CSS/nav.css";
import { ActionTypes } from "../PureRedux/Constants/actionTypes";

export const AppNav = () => {
  const token = useSelector((state) => state?.AuthMain?.data?.token);
  const xsrfToken = useSelector((state) => state?.AuthMain?.data?.xsrfToken);
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch({ type: ActionTypes.AUTH_LOGOUT });
  };

  return (
    <>
      {" "}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant="dark"
        style={{
          background: "rgb(55,53,85)",
          position: "fixed",
          width: "100%",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">Timehit</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {xsrfToken && token ? (
                <i
                  class="fa-solid fa-arrow-right-from-bracket btnLogout"
                  onClick={userLogout}
                ></i>
              ) : (
                <Link to="/user-login" className="loginLink">
                  <span>
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                  </span>
                  <span className="">Login</span>
                </Link>
              )}
              {/* <Link to="/user-login" className="loginLink">
                <span>
                  <i class="fa-solid fa-arrow-right-to-bracket"></i>
                </span>
                <span className="">Login</span>
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
