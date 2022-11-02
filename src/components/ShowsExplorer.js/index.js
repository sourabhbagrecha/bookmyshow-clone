import React, { useContext, useState } from "react";
import { ShowContext } from "../../contexts/ShowContext";
import sampleData from "../../sample.json";

const { movies } = sampleData;

const MovieShowItem = ({ show: { time, _id }, idx, movieId }) => {
  const { setSelectedShowId, setSelectedMovieId } = useContext(ShowContext);
  const handleClick = () => {
    setSelectedShowId(_id);
    setSelectedMovieId(movieId);
  };
  return (
    <button
      style={{ marginLeft: "20px", display: "block", marginTop: "10px" }}
      onClick={handleClick}
    >
      {/* <p> */}
      {idx + 1}.) {time}
      {/* </p> */}
    </button>
  );
};

const MovieItem = ({ movie: { _id, name, shows } }) => {
  const [showsVisible, setShowsVisible] = useState(false);

  const handleClick = () => {
    setShowsVisible((v) => !v);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h3 onClick={handleClick}>
        {name} {showsVisible ? "⬆️" : "➡️"}
      </h3>
      {showsVisible &&
        shows.map((show, idx) => {
          return <MovieShowItem show={show} idx={idx} movieId={_id} />;
        })}
    </div>
  );
};

export default function ShowsExplorer() {
  console.log({ movies });
  return (
    <div style={{ marginLeft: "10%" }}>
      <h2>ShowsExplorer</h2>
      {movies.map((movie) => {
        return <MovieItem movie={movie} />;
      })}
    </div>
  );
}
