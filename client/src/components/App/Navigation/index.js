import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useAuth } from "../Authentication";

const Navigation = () => {
  const [isActive, setIsActive] = React.useState(false);
  const { isAuthed } = useAuth();

  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </Link>
        <div
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          data-target="navbarExampleTransparentExample"
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              {isAuthed ? (
                <>
                  <p className="control">
                    <Link
                      className="button is-primary is-outlined"
                      to="/profile"
                    >
                      My Profile
                    </Link>
                  </p>
                  <p className="control">
                    <Link className="button is-white" to="/logout">
                      <i className="fas fa-power-off"></i>
                    </Link>
                  </p>
                </>
              ) : (
                <>
                  <p className="control">
                    <Link
                      className="button is-primary is-outlined"
                      to="/register"
                    >
                      Register
                    </Link>
                  </p>
                  <p className="control">
                    <Link className="button is-primary" to="/login">
                      Login
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;