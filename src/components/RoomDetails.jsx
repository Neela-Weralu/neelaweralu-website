import React from 'react';
import { useParams } from 'react-router-dom';

const RoomDetails = () => {
    const {slug} = useParams();
    // console.log(params);  
    return (
        <div>
            <h1>RoomDetails</h1>
            <p>Room Is {slug}</p>
        </div>
    );
};

export default RoomDetails;