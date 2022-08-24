import React, { useEffect, useState } from "react";
import UTIF from "utif";
import { Image, Layer, Stage } from "react-konva";
import { useTiffContext } from "./TiffContext";
const tiffResume = require("../Images/flaniganResume.tiff");

const TiffDisplay = (page) => {
  const [image, setImage] = useState();
  const { setPages } = useTiffContext();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", tiffResume);
    xhr.responseType = "arraybuffer";
    xhr.onload = (e) => {
      const ifds = UTIF.decode(e.target.response);

      const pages = [];

      ifds.forEach((page, i) => pages.push(i));
      setPages(pages);

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

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image image={image} />
      </Layer>
    </Stage>
  );
};

export default TiffDisplay;
