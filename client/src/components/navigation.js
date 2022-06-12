import { Link } from "react-router-dom";
import React from "react";
import Auth from "../utils/auth";
import { Nav, Navbar, Container } from "react-bootstrap";
export default function Navigation({
  handleFormSubmit,
  setSearchInput,
  searchInput,
}) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav.Link className="navbar-brand" to="/">
            ★ Show Selector!
          </Nav.Link>
          <label htmlFor="header-search">
            <span className="visually-hidden"></span>
          </label>
          <input
            id="header-search"
            placeholder="Look up a show!"
            value={searchInput}
            onChangeCapture={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" onClickCapture={() => handleFormSubmit()}>
            Search
          </button>
          <Nav>
            <Nav.Link className="nav-link" as={Link} to="/">
              Home
              <span className="sr-only">(current)</span>
            </Nav.Link>

            <Nav.Link className="nav-link" as={Link} to="/about">
              About
            </Nav.Link>

            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  Profile Page
                </Nav.Link>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
