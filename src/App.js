import "./App.css";
import SelectPage from "./Components/SelectPage";
import { TiffContext } from "./Components/TiffContext";

import Zoom from "./Components/ZoomPanPinch";

function App() {
  return (
    <TiffContext>
      <SelectPage />
      <Zoom />
    </TiffContext>
  );
}

export default App;
