import PropTypes from "prop-types";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import UTIF from "utif";

const tiffImage = require("../Images/flaniganResume.tiff");
const Context = createContext();

// While I probably don't need context for an app this small I like to set up ahead of time just in case and to avoid prop drilling.

export const TiffContext = ({ children }) => {
  // The pages array is set on mount and used in SelectPage.js. This will likely have to change
  const [pages, setPages] = useState([]);

  // pageNumber is set in SelectPage.js and used in TiffDisplay.js
  const [pageNumber, setPageNumber] = useState(0);

  // UTIF to just return pages array
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", tiffImage);
    xhr.responseType = "arraybuffer";
    xhr.onload = (e) => {
      const ifds = UTIF.decode(e.target.response);

      const pages = [];

      ifds.forEach((page, i) => pages.push({ id: i, number: i + 1 }));
      setPages(pages);
    };

    xhr.send();
  }, []);

  const value = useMemo(
    () => ({
      pageNumber,
      setPageNumber,
      pages,
      setPages,
    }),
    [pageNumber, pages]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useTiffContext = () => useContext(Context);
TiffContext.propTypes = {
  children: PropTypes.node.isRequired,
};
