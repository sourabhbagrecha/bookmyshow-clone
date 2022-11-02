import "./App.css";
import SeatLayout from "./components/SeatLayout";
import SeatQuantitySelect from "./components/SeatQuantitySelect";
import SeatTypeSelect from "./components/SeatTypeSelect";
import ShowsExplorer from "./components/ShowsExplorer.js";
import Snackbar from "./components/Snackbar";
import { ShowProvider } from "./contexts/ShowContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

function App() {
  return (
    <div>
      <SnackbarProvider>
        <ShowProvider>
          <div style={{ display: "flex" }}>
            <ShowsExplorer />
            <div className="App">
              <SeatLayout />
              <Snackbar />
            </div>
          </div>
        </ShowProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
