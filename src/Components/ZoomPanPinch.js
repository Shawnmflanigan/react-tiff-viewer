import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TiffDisplay from "./TiffDisplay";

export const Zoom = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <TiffDisplay index={0} />
      </TransformComponent>
      <TransformComponent>
        <TiffDisplay index={1} />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Zoom;
