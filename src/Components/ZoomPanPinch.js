import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TiffDisplay from "./TiffDisplay";
import { useTiffContext } from "./TiffContext";

export const Zoom = () => {
  const { pageNumber } = useTiffContext();

  return (
    <TransformWrapper>
      <TransformComponent>
        <TiffDisplay index={pageNumber} />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Zoom;
