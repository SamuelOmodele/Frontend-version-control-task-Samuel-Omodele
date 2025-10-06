import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1>Find Your Dream Home</h1>
          <p>Discover the best properties at unbeatable prices.</p>
          <a href="#listings" className={styles.ctaBtn}>Browse Listings</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
