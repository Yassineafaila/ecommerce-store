import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHeart,
  faCartShopping,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";
import navMenu from "./Navbar.animation";
import { useProducts } from "../../context/ProductsContext";
function Navbar() {
  const { CartProducts, likedProducts } = useProducts();
  const MenuItem = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Contact Us",
      path: "/contact-us",
    },
    {
      link: "About Us",
      path: "/about-us",
    },
  ];
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
          {MenuItem.map((item, index) => {
            return (
              <motion.li
                whileHover={{
                  scale: 1.05,
                }}
                className="navbar__item"
                key={index}
              >
                <NavLink to={item.path}>{item.link}</NavLink>
              </motion.li>
            );
          })}
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
              <NavLink to="/sign-in">
                <FontAwesomeIcon icon={faUser} />
                <span>Sign in</span>
              </NavLink>
            </motion.li>
          </ul>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Navbar;
