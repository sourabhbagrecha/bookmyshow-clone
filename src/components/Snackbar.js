import React, { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";

export default function Snackbar() {
  const { kind, message, showSnackbar } = useContext(SnackbarContext);
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "10px",
        borderRadius: "7px",
        backgroundColor: kind === "error" ? "lightcoral" : "#47b7f8",
        color: "white",
        display: showSnackbar ? "block" : "none",
      }}
    >
      {message}
    </div>
  );
}
