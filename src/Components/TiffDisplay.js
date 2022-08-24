import React, { useEffect, useState } from "react";
import UTIF from "utif";
import { Image, Layer, Stage } from "react-konva";
import { useTiffContext } from "./TiffContext";
const tiffResume = require("../Images/flaniganResume.tiff");

const TiffDisplay = (page) => {
  // TODO--Maybe move this up to context.
  const [image, setImage] = useState();
  const pages = useTiffContext();

  // Set image based on canvas image data
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", tiffResume);
    xhr.responseType = "arraybuffer";
    xhr.onload = (e) => {
      const ifds = UTIF.decode(e.target.response);

      const pageOfTiff = ifds[page.index];
      UTIF.decodeImage(e.target.response, pageOfTiff);
      const rgba = UTIF.toRGBA8(pageOfTiff);

      const imageWidth = pageOfTiff.width;
      const imageHeight = pageOfTiff.height;

      const cnv = document.createElement("canvas");
      cnv.width = imageWidth;
      cnv.height = imageHeight;

      const ctx = cnv.getContext("2d");
      const imageData = ctx.createImageData(imageWidth, imageHeight);
      for (let i = 0; i < rgba.length; i++) {
        imageData.data[i] = rgba[i];
      }
      ctx.putImageData(imageData, 0, 0);

      setImage(cnv);
    };

    xhr.send();
  }, [page.index]);
  console.log(pages);
  // Konva image viewer
  return (
    <Stage
      width={window.innerWidth / pages.pages.length}
      height={window.innerHeight}
      className={"zoom-stage"}
    >
      <Layer>
        <Image image={image} />
      </Layer>
    </Stage>
  );
};

export default TiffDisplay;
