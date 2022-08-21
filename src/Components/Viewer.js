import React from "react";
import Viewer from "react-viewer";
import * as jpgResume from "../Images/jpegResume.jpg";

const AppViewer = () => {
  const [visible, setVisible] = React.useState(false);
  console.log(jpgResume);

  return (
    <>
      <div>
        <div>
          <img src="../images/test.png" alt=""></img>
        </div>
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
              src: "../Images/jpegResume.jpg",
              alt: "",
            },
          ]}
        />
      </div>
    </>
  );
};

export default AppViewer;
