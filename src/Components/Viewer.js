import React from "react";
import Viewer from "react-viewer";

const jpgResume = require("../Images/jpegResume.jpg");
const test = require("../Images/test.png");
const tiffResume = require("../Images/flaniganResume.tiff");

const AppViewer = () => {
  const [visible, setVisible] = React.useState(false);
  console.log(jpgResume);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          show
        </button>
        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          images={[
            {
              src: test,
              alt: "",
            },
            {
              src: tiffResume,
              alt: "",
            },
          ]}
        />
      </div>
    </>
  );
};

export default AppViewer;
