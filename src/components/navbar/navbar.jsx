import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h3>BeautiHome</h3>

      {/* Desktop Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#listings" onClick={() => setMenuOpen(false)}>Listings</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact us</a>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;

