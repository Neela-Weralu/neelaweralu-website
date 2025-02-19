import React from 'react'
import styles from "../styles/Gallery.module.css"
import img from "../images/room-1.jpeg"
import temp from "../images/photo2.jpg"
import temp1 from "../images/photo3.jpg"
import temp2 from "../images/photo4.jpg"
export default function Gallery() {
  const spaces = [
    {
      id: 1,
      name: "Family Room",
      description: "Nicely arranged with modern design",
      image: img,
      alt: "Elegant hotel lobby with modern furnishings"
    },
    {
      id: 2,
      name: "Front Garden",
      description: "Many Sri Lankan Trees and Flowers",
      image: temp1,
      alt: "Rooftop swimming pool with city skyline view"
    },
    {
      id: 3,
      name: "Hill Top View",
      description: "Panaromic View of Hills and Resovoir",
      image: temp,
      alt: "Upscale restaurant interior with elegant table settings"
    },
    {
      id: 4,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp2,
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

