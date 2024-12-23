import React from 'react'
import styles from "../styles/Gallery.module.css"
import img from "../images/room-1.jpeg"
import temp from "../images/photo2.jpg"

export default function Gallery() {
  const spaces = [
    {
      id: 1,
      name: "Luxurious Lobby",
      description: "Grand entrance with modern design",
      image: img,
      alt: "Elegant hotel lobby with modern furnishings"
    },
    {
      id: 2,
      name: "Rooftop Pool",
      description: "Panoramic city views",
      image: temp,
      alt: "Rooftop swimming pool with city skyline view"
    },
    {
      id: 3,
      name: "Fine Dining Restaurant",
      description: "Elegant atmosphere & cuisine",
      image: temp,
      alt: "Upscale restaurant interior with elegant table settings"
    },
    {
      id: 4,
      name: "Wellness Spa",
      description: "Relaxation & rejuvenation",
      image: img,
      alt: "Tranquil spa treatment room"
    },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Experience Luxury</h2>
      <div className={styles.grid}>
        {spaces.map((space) => (
          <div key={space.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={space.image}
                alt={space.alt}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{space.name}</h3>
              <p className={styles.description}>{space.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

