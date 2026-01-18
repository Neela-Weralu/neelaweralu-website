import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RoomIndex from "./components/RoomIndex";
import RoomDetails from "./components/RoomDetails";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
// Imports ijasdoiajsoidjaa
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallary";
// import Footer from "./components/Footer";
import TwoColumns from "./components/TwoColumns";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/gallery" element={<Gallery />} />
                <Route exact path="/rooms/" element={<Rooms/>} />
                <Route exact path="/rooms/:slug" element={<Rooms/>} />
                <Route path="/" element={<TwoColumns />} />
                <Route element={Error} />
            </Routes>
            <TwoColumns  />
        </>
    );
}

export default App;
