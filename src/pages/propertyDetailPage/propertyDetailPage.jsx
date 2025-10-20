import React from "react";
import { useNavigate, useParams } from "react-router-dom"; // ✅ import useParams
import styles from "./propertyDetail.module.scss";
import house1 from "../../assets/house1.jpeg";
import house2 from "../../assets/house2.jpg";
import house3 from "../../assets/house3.jpg";
import house4 from "../../assets/house4.jpg";
import house5 from "../../assets/house5.jpg";
import house6 from "../../assets/house6.webp";
import { FaCircleArrowLeft } from "react-icons/fa6";

const PropertyDetail = () => {
  const { id } = useParams(); // ✅ get id from URL params
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      price: "$250,000",
      location: "Lagos, Nigeria",
      bedrooms: 3,
      bathrooms: 2,
      size: "2000 sqft",
      image: house1,
      description:
        "This stunning family home offers spacious living areas, a modern kitchen, and a beautiful backyard. Perfect for families looking for comfort and style in a prime location.",
    },
    {
      id: 2,
      title: "Cozy Starter Home",
      price: "$180,000",
      location: "Abuja, Nigeria",
      bedrooms: 2,
      bathrooms: 1,
      size: "1200 sqft",
      image: house2,
      description:
        "An affordable and cozy home, ideal for first-time buyers. Located in a peaceful neighborhood with easy access to the city center.",
    },
    {
      id: 3,
      title: "Spacious Duplex",
      price: "$350,000",
      location: "Ibadan, Nigeria",
      bedrooms: 4,
      bathrooms: 3,
      size: "2800 sqft",
      image: house3,
      description:
        "A spacious duplex with modern finishes, large living areas, and ample parking space. Perfect for larger families seeking comfort and privacy.",
    },
    {
      id: 4,
      title: "Luxury Villa",
      price: "$450,000",
      location: "Lagos, Nigeria",
      bedrooms: 5,
      bathrooms: 5,
      size: "4000 sqft",
      image: house4,
      description:
        "A luxury villa with breathtaking design, private pool, and premium amenities. Located in one of Lagos' most desirable neighborhoods.",
    },
    {
      id: 5,
      title: "Elegant Family House",
      price: "$350,000",
      location: "Abuja, Nigeria",
      bedrooms: 4,
      bathrooms: 3,
      size: "3000 sqft",
      image: house5,
      description:
        "An elegant family house featuring spacious interiors, a modern kitchen, and landscaped garden. Close to top schools and shopping centers.",
    },
    {
      id: 6,
      title: "Executive Mansion",
      price: "$500,000",
      location: "Port Harcourt, Nigeria",
      bedrooms: 6,
      bathrooms: 6,
      size: "5000 sqft",
      image: house6,
      description:
        "An executive mansion with six en-suite bedrooms, luxurious finishes, and a private compound. Ideal for executives or large families.",
    },
  ];

  // ✅ convert id (string) to number and find property
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <h2 style={{ padding: "2rem" }}>Property not found</h2>;
  }

  return (
    <section className={styles.propertyDetail}>
      <FaCircleArrowLeft onClick={() => navigate(-1)} size={32} style={{position: 'absolute', top: '30px', color: '#2c3e50', cursor: 'pointer'}}/>
      <div className={styles.imageWrapper}>
        <img src={property.image} alt={property.title} />
      </div>

      <div className={styles.info}>
        <h1>{property.title}</h1>
        <h2>{property.price}</h2>
        <p className={styles.location}>{property.location}</p>

        <ul className={styles.features}>
          <li>{property.bedrooms} Bedrooms</li>
          <li>{property.bathrooms} Bathrooms</li>
          <li>{property.size}</li>
        </ul>

        <p className={styles.description}>{property.description}</p>

        <button className={styles.ctaBtn}>Contact Agent</button>
      </div>
    </section>
  );
};

export default PropertyDetail;
