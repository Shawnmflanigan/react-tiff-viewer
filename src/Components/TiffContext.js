import PropTypes from "prop-types";
import React, { createContext, useContext, useMemo, useState } from "react";

const Context = createContext();

export const TiffContext = ({ children }) => {
  const [pages, setPages] = useState([]);

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
