import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
//import RoomsContainer from "../components/RoomContainer";
import RoomsContainer from "../components/RoomsContainer";
//export default function Rooms() {
//    return (
//    <div>
//    <h1>Welcome to the Rooms</h1>;
//    <h4>Welcome to the Rooms</h4>;
//    </div> )
//  }
  
// export default Rooms;
const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    );
};

export default Rooms;
