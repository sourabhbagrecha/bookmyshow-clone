import { createContext, useEffect, useState } from "react";
import defaults from "../sample.json";

const { shows, defaultNumberOfColumnsPerRow } = defaults;

export const ShowContext = createContext();

const defaultShowId = 100;

const computeShow = (showId, userSelections = [], selectedSeatType) => {
  return shows
    .find((s) => s._id === showId)
    .seatTypes.map((seatType) => {
      const allSeatsInASeatType = [];
      for (let row = 0; row < seatType.rows; row++) {
        const allSeatsInARow = [];
        for (let col = 0; col < defaultNumberOfColumnsPerRow; col++) {
          const _id = `${seatType.name}-${row}-${col}`;
          allSeatsInARow.push({
            _id,
            status:
              seatType.bookings?.includes(_id) ||
              selectedSeatType !== seatType.name
                ? "unavailable"
                : userSelections.includes(_id)
                ? "selected"
                : "available",
          });
        }
        allSeatsInASeatType.push(allSeatsInARow);
      }
      return {
        name: seatType.name,
        layout: allSeatsInASeatType,
      };
    });
};

export const ShowProvider = ({ children }) => {
  const computedShow = computeShow(defaultShowId);
  const [show, setShow] = useState({ seatLayouts: computedShow });
  const [seatQuantity, setSeatQuantity] = useState(1);
  const [seatType, setSeatType] = useState("Standard");
  const [userSelections, setUserSelections] = useState(["Standard-0-5"]);

  useEffect(() => {
    const computedShow = computeShow(defaultShowId, userSelections, seatType);
    setShow({ seatLayouts: computedShow });
  }, [userSelections, seatType]);

  useEffect(() => {
    setUserSelections([]);
  }, [seatType]);

  const handleQuantityChange = (e) => setSeatQuantity(parseInt(e.target.value));
  const handleTypeChange = (e) => setSeatType(e.target.value);

  return (
    <ShowContext.Provider
      value={{
        show,
        setShow,
        seatQuantity,
        handleQuantityChange,
        seatType,
        handleTypeChange,
        setUserSelections,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};
