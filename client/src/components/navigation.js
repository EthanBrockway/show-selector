import { Link } from "react-router-dom";
import React, { useState } from "react";
import Auth from "../utils/auth";
import { Nav, Navbar, Container } from "react-bootstrap";
export default function Navigation({
  handleFormSubmit,
  setSearchInput,
  searchInput,
}) {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav.Link
            className="navbar-brand"
            as={Link}
            to="/"
            onClick={() => {
              setSelectedTab("home");
            }}
          >
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
            <Nav.Link
              className="nav-link"
              as={Link}
              to="/"
              onClick={() => {
                setSelectedTab("home");
              }}
            >
              Home
              <span className="sr-only">(current)</span>
            </Nav.Link>

            <Nav.Link
              className="nav-link"
              as={Link}
              to="/about"
              onClick={() => {
                setSelectedTab("About");
              }}
            >
              About
            </Nav.Link>

            {Auth.loggedIn() ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/profile"
                  onClick={() => {
                    window.location.assign("http://localhost:3000/profile");
                    setSelectedTab("Profile");
                  }}
                >
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
