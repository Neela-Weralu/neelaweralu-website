import React from 'react'
import styles from "../styles/Gallery.module.css"
import img from "../images/room-1.jpeg"
import temp from "../images/photo2.jpg"
import temp1 from "../images/photo3.jpg"
import temp2 from "../images/photo4.jpg"
import temp3 from "../images/photo5.jpg"
import temp4 from "../images/photo7.jpg"
import temp5 from "../images/photo8.jpg"
import temp6 from "../images/photo9.jpg"
import temp7 from "../images/photo10.jpg"
import temp8 from "../images/photo12.jpg"
import temp9 from "../images/photo6.jpg"
import temp10 from "../images/phot13.jpg"
import temp11 from "../images/photo14.jpg"
import temp12 from "../images/photo15.jpg"
import temp13 from "../images/photo16.jpg"
import temp14 from "../images/phot17.jpg"
import temp15 from "../images/photo18.jpg"
import temp16 from "../images/photo19.jpg"
import temp17 from "../images/photo20.jpg"
import temp18 from "../images/balcony1.jpg"
import temp19 from "../images/balcony2.jpg"
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
      image: temp3,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 5,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp4,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 6,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp5,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 7,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp6,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 8,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp7,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 9,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp8,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 10,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp9,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 11,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp2,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 12,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp10,
      alt: "Tranquil spa treatment room"
    },
      {
      id: 13,
      name: "Enjoy the Environment",
      description: "Relaxation & rejuvenation",
      image: temp11,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 14,
      name: "Room Facilities",
      description: "",
      image: temp12,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 15,
      name: "Room Facilities",
      description: "",
      image: temp13,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 16,
      name: "Room Facilities",
      description: "",
      image: temp14,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 17,
      name: "Dining Area",
      description: "Enjoy the meals with nice environment",
      image: temp15,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 18,
      name: "Dining Area",
      description: "Enjoy the meals with nice environment",
      image: temp16,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 19,
      name: "Room Facilities",
      description: "Enjoy your breakfast",
      image: temp17,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 20,
      name: "Room Facilities",
      description: "Private balcony for each room",
      image: temp18,
      alt: "Tranquil spa treatment room"
    },
    {
      id: 21,
      name: "Room Facilities",
      description: "Private balcony for each room",
      image: temp19,
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

