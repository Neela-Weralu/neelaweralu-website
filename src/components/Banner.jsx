import React from "react";

const Banner = ({ children, title, subtitle }) => {
    return (
        <div className="banner">
            <h2>Neela Weralu</h2>
            <h1>{title}</h1>
            <div />
            <p>{subtitle}</p>
            {children}
        </div>
    );
};

export default Banner;
