import PropTypes from "prop-types";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import UTIF from "utif";

const tiffResume = require("../Images/flaniganResume.tiff");

const Context = createContext();

export const TiffContext = ({ children }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", tiffResume);
    xhr.responseType = "arraybuffer";
    xhr.onload = (e) => {
      const ifds = UTIF.decode(e.target.response);

      const pages = [];

      ifds.forEach((page, i) => pages.push(i));
      setPages(pages);
    };

    xhr.send();
  }, []);

  const value = useMemo(
    () => ({
      pages,
      setPages,
    }),
    [pages]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useTiffContext = () => useContext(Context);
TiffContext.propTypes = {
  children: PropTypes.node.isRequired,
};
