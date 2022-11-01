import "./App.css";
import SeatLayout from "./components/SeatLayout";
import SeatQuantitySelect from "./components/SeatQuantitySelect";
import SeatTypeSelect from "./components/SeatTypeSelect";
import Snackbar from "./components/Snackbar";
import { ShowProvider } from "./contexts/ShowContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <h1>Select your seats!</h1>
        <ShowProvider>
          <SeatTypeSelect />
          <SeatQuantitySelect />
          <SeatLayout />
        </ShowProvider>
        <Snackbar />
      </SnackbarProvider>
    </div>
  );
}

export default App;
