import { Card, CardBody, CardTitle } from "reactstrap";
import "./App.css";
import SelectPage from "./Components/SelectPage";
import { TiffContext } from "./Components/TiffContext";
import "./App.css";

import Zoom from "./Components/ZoomPanPinch";

function App() {
  return (
    <TiffContext>
      <Card className="tiff-container d-flex justify-content-center text-center">
        <CardTitle className="card-head">React Tiff Viewer</CardTitle>
        <CardBody>
          {" "}
          <SelectPage />
          <Zoom />
        </CardBody>
      </Card>
    </TiffContext>
  );
}

export default App;
