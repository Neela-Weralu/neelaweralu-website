import React from "react";
import "../styles/TwoColumns.css"

function TwoColumns() {
  const column1Items = ["Tel: 94 755500890", "e-mail: neelaweralu@gmail.com", "Whatsapp: 94 755500890"];
  const column2Items = ["Home", "Photo Gallery", "Email"];
  const links = {
    "Home": "/",
    "Photo Gallery": "/gallery"
  };

  return (
    <div className="two-columns-section">
      <div className="two-columns-container">
        <div className="column">
          <h3>CONTACT DETAILS</h3>
          <ul>
            {column1Items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>QUICK LINKS</h3>
          <ul>
            {column2Items.map((item, index) => (
              <li key={index}>
                {item === "Home" || item === "Photo Gallery" ? (
                  <a href={links[item]}>{item}</a>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TwoColumns;
