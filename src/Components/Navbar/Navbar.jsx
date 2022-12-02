import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setKeyword } from "../../Redux/SearchSlice";

export default function Navbar(props) {
  let NavTo = useNavigate();
  let LogOut = () => {
    localStorage.clear();
    NavTo("/SignIn");
  };
  let dsipatcher = useDispatch();
  console.log(props.Auth);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h3>Noxe</h3>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!props.Auth ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/Home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/Movies"
                    >
                      Movies
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/Tv"
                    >
                      Tv Show
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/People"
                    >
                      People
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/About"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/Network"
                    >
                      NetWork
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/SignUp"
                    >
                      SignUp
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/SignIn"
                    >
                      SignIn
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!props.Auth ? (
                <>
                  <li>
                    <input
                      type="text"
                      placeholder="searching..."
                      className="form-control"
                      onChange={({ target }) => {
                        dsipatcher(setKeyword(target.value));
                      }}
                    />
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/SignIn"
                      className="nav-link active"
                      onClick={LogOut}
                    >
                      Log out
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
