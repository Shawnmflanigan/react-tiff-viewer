import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TiffDisplay from "./TiffDisplay";
import { useTiffContext } from "./TiffContext";

export const Zoom = () => {
  const { pages } = useTiffContext();

  console.log(pages);

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
