import { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";

function SeatTypeSelect() {
  const { seatType, handleTypeChange } = useContext(ShowContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h3>Select Seat Type:</h3>
      <select value={seatType} onChange={handleTypeChange}>
        <option value="Premium">Premium</option>
        <option value="Standard">Standard</option>
      </select>
    </div>
  );
}

export default SeatTypeSelect;
