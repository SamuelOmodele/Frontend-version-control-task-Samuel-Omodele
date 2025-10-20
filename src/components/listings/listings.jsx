import React from "react";
import styles from "./listings.module.scss";
import house1 from '../../assets/house1.jpeg'
import house2 from '../../assets/house2.jpg'
import house3 from '../../assets/house3.jpg'
import house4 from '../../assets/house4.jpg'
import house5 from '../../assets/house5.jpg'
import house6 from '../../assets/house6.webp'
import { useNavigate } from "react-router-dom";

const Listings = () => {

  const navigate = useNavigate();

  const listings = [
    {
      id: 1,
      image: house1,
      title: "Modern Family Home",
      price: "$250,000",
      details: "3 Bed • 2 Bath • Lagos",
    },
    {
      id: 2,
      image: house2,
      title: "Cozy Starter Home",
      price: "$180,000",
      details: "2 Bed • 1 Bath • Abuja",
    },
    {
      id: 3,
      image: house3,
      title: "Spacious Duplex",
      price: "$350,000",
      details: "4 Bed • 3 Bath • Ibadan",
    },
    {
      id: 4,
      image: house4,
      title: "Luxury Villa",
      price: "$450,000",
      details: "5 Bed • 5 Bath • Lagos",
    },
    {
      id: 5,
      image: house5,
      title: "Elegant Family House",
      price: "$350,000",
      details: "4 Bed • 3 Bath • Abuja",
    },
    {
      id: 6,
      image: house6,
      title: "Executive Mansion",
      price: "$500,000",
      details: "6 Bed • 6 Bath • Port Harcourt",
    },
  ];


  return (
    <section className={styles.featured} id="listings">
      <h2>Our Listings</h2>
      <div className={styles.listingsGrid}>
        {listings.map((listing) => (
          <div key={listing.id} className={styles.card}>
            <img src={listing.image} alt="house" />
            <div className={styles.cardBody}>
              <h3><span>{listing.title}</span> - {listing.price}</h3>
              <p>{listing.details}</p>
              <button onClick={() => navigate(`/property/${listing.id}`)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listings;
