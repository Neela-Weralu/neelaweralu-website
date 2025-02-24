import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import room1 from "../images/room-1.jpeg"

const RoomDetails = () => {
    const {slug} = useParams();
    // console.log(params);  
    let [curRoom, setCurRoom] = useState({
        title: 'Delux Room',
        description: 'This is a Deluxe room'
    });
    let roomDetailsMap = {
        'double-deluxe' : {
            title: 'Delux Room',
            description: 'This is a Double delux room',
            image: room1
        },
        'family-deluxe' : {
            title: 'Family Room',
            description: 'This is a family room',
            
        },
        'presidential-room' : {
            title: 'Presidential Room',
            description: 'This is a Presedential room',
            
        }
    }
    console.log(slug); 
    useEffect(() => {
        setCurRoom(roomDetailsMap[slug])
    })

    return (
        <div>
            <div><i>{curRoom.title}</i></div>
            <div><i>{curRoom.title}</i></div>
            <div>{curRoom.description}</div>
            <div>{curRoom.description}</div>
            <div>
                <img 
                    src={curRoom.image} 
                    alt={curRoom.title} 
                    style={{ width: '6in', height: '5in' }} 
                />
            </div>
        </div>
    );
};

export default RoomDetails;