import { NavLink } from "react-router-dom";
import React from "react";

export default function Navigation({
  handleFormSubmit,
  setSearchInput,
  searchInput,
}) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            ★ Show Stars!
          </NavLink>

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

          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Log In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
