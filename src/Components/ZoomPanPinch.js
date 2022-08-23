import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Konva from "./refactoredKonva";

class Zoom extends Component {
  render() {
    return (
      <TransformWrapper>
        <TransformComponent>
          <Konva />
          {/* <img src={ping} alt="test" /> */}
        </TransformComponent>
      </TransformWrapper>
    );
  }
}

export default Zoom;
