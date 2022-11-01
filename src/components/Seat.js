import { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";
import { SnackbarContext } from "../contexts/SnackbarContext";

function Seat(props) {
  const { status, _id } = props;
  const { setUserSelections, seatQuantity } = useContext(ShowContext);
  const { infoAlert, errorAlert } = useContext(SnackbarContext);
  const handleSeatClick = () => {
    setUserSelections((userSelections) => {
      if (userSelections.includes(_id)) {
        return userSelections.filter((x) => x !== _id);
      }
      if (seatQuantity === userSelections.length) {
        errorAlert(
          `${seatQuantity} seat ${
            seatQuantity > 1 ? "s" : ""
          } have already been selected, replacing the next with the first one.`
        );
        const [, ...restOfTheSeats] = userSelections;
        return [...restOfTheSeats, _id];
      } else {
        infoAlert(`Seat ${_id} has been selected!`);
        return [...userSelections, _id];
      }
    });
  };
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
