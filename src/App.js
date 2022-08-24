import "./App.css";
import { TiffContext } from "./Components/TiffContext";

import Zoom from "./Components/ZoomPanPinch";

function App() {
  return (
    <TiffContext>
      <Zoom />
    </TiffContext>
  );
}

export default App;
