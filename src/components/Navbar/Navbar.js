import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";
import navMenu from "./Navbar.animation";
import { useProducts } from "../../context/ProductsContext";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
  const { CartProducts, likedProducts } = useProducts();
  const { logout, isAuthenticated } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(true);
  };
  const hideMenuHandler = () => {
    setShowMenu(false);
  };
  return (
    <AnimatePresence>
      <motion.nav
        variants={navMenu}
        initial="hidden"
        animate="visible"
        className="navbar"
      >
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo">
            ShopYassine
          </Link>
          <div className="buttons">
            {showMenu ? (
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="close"
                onClick={hideMenuHandler}
              >
                <FontAwesomeIcon icon={faXmark} />
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="hamburger"
                onClick={showMenuHandler}
              >
                <FontAwesomeIcon icon={faBars} />
              </motion.button>
            )}
          </div>
        </div>
        <ul className={`navbar__list ${showMenu ? "show" : null}`}>
          <motion.li
            whileHover={{
              scale: 1.05,
            }}
            className="navbar__item"
          >
            <NavLink to="/">Home</NavLink>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.05,
            }}
            className="navbar__item"
          >
            <NavLink to="/contact-us">Contact Us</NavLink>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.05,
            }}
            className="navbar__item"
          >
            <NavLink to="/about-us">About Us</NavLink>
          </motion.li>
          {isAuthenticated ? (
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              className="navbar__item"
            >
              <button type="button" onClick={()=>logout()}>Log Out</button>
            </motion.li>
          ) : (
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              className="navbar__item"
            >
              <NavLink to="/sign-up">Sign Up</NavLink>
            </motion.li>
          )}
        </ul>
        <div>
          <ul className={`navbar__list`}>
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
            >
              <NavLink to="/shopping-cart">
                <span>{CartProducts.length ? CartProducts.length : null}</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
            >
              <NavLink to="/wish-list">
                <span>
                  {likedProducts.length ? likedProducts.length : null}
                </span>
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
            >
              {isAuthenticated ? (
                <NavLink to="/manage-account">
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              ) : (
                <NavLink to="/sign-in">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Sign in</span>
                </NavLink>
              )}
            </motion.li>
          </ul>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Navbar;
