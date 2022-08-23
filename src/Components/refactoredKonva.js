import React, { useEffect, useState } from "react";
import UTIF from "utif";
import { Image, Layer, Stage } from "react-konva";
const tiffResume = require("../Images/flaniganResume.tiff");

const Konva = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", tiffResume);
    xhr.responseType = "arraybuffer";
    xhr.onload = (e) => {
      console.log(e.target.response);
      const ifds = UTIF.decode(e.target.response);
      const firstPageOfTif = ifds[0];
      UTIF.decodeImage(e.target.response, firstPageOfTif);
      const rgba = UTIF.toRGBA8(firstPageOfTif);

      const imageWidth = firstPageOfTif.width;
      const imageHeight = firstPageOfTif.height;

      const cnv = document.createElement("canvas");
      cnv.width = imageWidth;
      cnv.height = imageHeight;

      console.log(imageHeight);

      const ctx = cnv.getContext("2d");
      const imageData = ctx.createImageData(imageWidth, imageHeight);
      for (let i = 0; i < rgba.length; i++) {
        imageData.data[i] = rgba[i];
      }
      ctx.putImageData(imageData, 0, 0);

      setImage(cnv);

      // this.setState({
      //   image: cnv,
      // });
    };

    xhr.send();
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image image={image} />
      </Layer>
    </Stage>
  );
};

export default Konva;
