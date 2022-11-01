import { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";

function Seat(props) {
  const { status, _id } = props;
  const { setUserSelections, seatQuantity } = useContext(ShowContext);
  const handleSeatClick = (e) =>
    setUserSelections((userSelections) => {
      if (userSelections.includes(_id)) {
        return userSelections.filter((x) => x !== _id);
      }
      if (seatQuantity === userSelections.length) {
        const [_firstSeat, ...restOfTheSeats] = userSelections;
        return [...restOfTheSeats, _id];
      } else {
        return [...userSelections, _id];
      }
    });
  return (
    <div>
      <input
        checked={status === "unavailable" || status === "selected"}
        disabled={status === "unavailable"}
        type="checkbox"
        onClick={handleSeatClick}
      />
    </div>
  );
}

export default Seat;
