import React from 'react';
import { NavLink, useNavigate } from 'react-router'; // use react-router-dom
import NavbarStyle from "./Navbar.module.css";
import manprofile from "./man.png";

const Navbar = ({ auth }) => {
  const navigate = useNavigate();
 function handleProfile(){
  navigate("/login")
 }
  return (
    <>
      <h1 className={NavbarStyle.topHeader}>Mindful Stretch</h1>
      <header className={NavbarStyle.header}>
        <div>Mindful Stretch</div>
        <div className={NavbarStyle.allLinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? NavbarStyle.active : ""} ${NavbarStyle.links}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/yog-page"
            className={({ isActive }) =>
              `${isActive ? NavbarStyle.active : ""} ${NavbarStyle.links}`
            }
          >
            Yogasana
          </NavLink>
          {auth ? (
            <NavLink
              to="/community/social-community"
              className={({ isActive }) =>
                `${isActive ? NavbarStyle.active : ""} ${NavbarStyle.links}`
              }
            >
              Community
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${isActive ? NavbarStyle.active : ""} ${NavbarStyle.links}`
              }
            >
              Community
            </NavLink>
          )}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? NavbarStyle.active : ""} ${NavbarStyle.links}`
            }
          >
            About
          </NavLink>
        </div>
        <div>
          {auth ? (
            <img
              className={NavbarStyle.image}
              src={manprofile}
              alt="Profile"
              onClick={handleProfile}
            />
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${isActive ? NavbarStyle.active : ""} ${NavbarStyle.links}`
              }
            >
              Sign In
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
