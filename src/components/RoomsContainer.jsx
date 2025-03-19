import React from "react";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import { RoomConsumer, withRoomConsumer } from "../context";
import Loading from "../components/Loading";
function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { rooms, sortedRooms, loading } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
            {/* <Loading /> */}
          </div>
        );
      }}
    </RoomConsumer>
  );
}
export default withRoomConsumer(RoomsContainer);
