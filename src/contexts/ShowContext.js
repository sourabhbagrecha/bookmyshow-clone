import { createContext, useEffect, useState } from "react";
import defaults from "../sample.json";

const { movies, defaultNumberOfColumnsPerRow } = defaults;

export const ShowContext = createContext();

const computeShow = (
  movieId,
  showId,
  selectedSeatType,
  userSelections = []
) => {
  return movies
    .find((m) => m._id === movieId)
    .shows.find((s) => s._id === showId)
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
  const [selectedShowId, setSelectedShowId] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [show, setShow] = useState(null);
  const [seatQuantity, setSeatQuantity] = useState(1);
  const [seatType, setSeatType] = useState("Standard");
  const [userSelections, setUserSelections] = useState(["Standard-0-5"]);

  useEffect(() => {
    if (selectedMovieId && selectedShowId) {
      const computedShow = computeShow(
        selectedMovieId,
        selectedShowId,
        seatType,
        userSelections
      );
      setShow({ seatLayouts: computedShow });
    }
  }, [seatType, selectedMovieId, selectedShowId, userSelections]);

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
        setSelectedShowId,
        setSelectedMovieId,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};
