import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.about}>
          <h3>BeautiHome</h3>
          <p>
            Helping you find your dream home with trusted listings and expert
            advice.
          </p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#listings">Properties</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: info@beautihome.com</p>
          <p>Phone: +234 800 123 4567</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} BeautiHome. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
