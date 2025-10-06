import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1>Find Your Dream Home</h1>
          <p>Discover premium properties tailored to your lifestyle. From modern apartments to luxurious family homes, find the perfect place that matches your taste and budget.</p>
          <a href="#listings" className={styles.ctaBtn}>Browse Listings</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
