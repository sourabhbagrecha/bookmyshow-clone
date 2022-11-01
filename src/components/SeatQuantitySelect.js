import { useContext } from "react";
import { ShowContext } from "../contexts/ShowContext";

function SeatQuantitySelect() {
  const { seatQuantity, handleQuantityChange } = useContext(ShowContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Select Seat Quantity:</p>
      <select value={seatQuantity.toString()} onChange={handleQuantityChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default SeatQuantitySelect;
