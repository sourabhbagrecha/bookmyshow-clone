import "./App.css";
import SeatLayout from "./components/SeatLayout";
import SeatQuantitySelect from "./components/SeatQuantitySelect";
import SeatTypeSelect from "./components/SeatTypeSelect";
import { ShowProvider } from "./contexts/ShowContext";

function App() {
  return (
    <div className="App">
      <h1>Seat Selection</h1>
      <ShowProvider>
        <SeatTypeSelect />
        <SeatQuantitySelect />
        <SeatLayout />
      </ShowProvider>
    </div>
  );
}

export default App;
