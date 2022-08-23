import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Konva from "./refactoredKonva";

export const Zoom = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <Konva index={0} />
      </TransformComponent>
      <TransformComponent>
        <Konva index={1} />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Zoom;
