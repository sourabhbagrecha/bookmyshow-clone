import React, { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";
import Seat from "./Seat";

const SeatTypeLayout = ({ seatTypeDetails }) => {
  return (
    <>
      <h5>{seatTypeDetails.name}</h5>
      {seatTypeDetails.layout.map((rows) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {rows.map((seat) => {
            return <Seat key={seat._id} _id={seat._id} status={seat.status} />;
          })}
        </div>
      ))}
    </>
  );
};

export default function SeatLayout() {
  const { show } = useContext(ShowContext);
  return (
    <div>
      {show.seatLayouts.map((seatTypeDetails) => (
        <SeatTypeLayout seatTypeDetails={seatTypeDetails} />
      ))}
    </div>
  );
}
