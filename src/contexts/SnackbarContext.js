import { createContext, useEffect, useState } from "react";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [kind, setKind] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    let timer;
    if (showSnackbar) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowSnackbar(false);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showSnackbar]);

  const infoAlert = (msg) => {
    setMessage(msg);
    setShowSnackbar(true);
    setKind("info");
  };

  const errorAlert = (msg) => {
    setMessage(msg);
    setShowSnackbar(true);
    setKind("error");
  };

  return (
    <SnackbarContext.Provider
      value={{
        setMessage,
        setShowSnackbar,
        message,
        showSnackbar,
        infoAlert,
        kind,
        setKind,
        errorAlert,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
