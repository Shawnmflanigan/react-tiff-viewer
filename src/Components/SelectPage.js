import React from "react";
import { useTiffContext } from "./TiffContext";

const SelectPage = () => {
  const { pages, setPageNumber } = useTiffContext();

  return pages.map((page) => {
    return (
      <button
        onClick={() => {
          setPageNumber(page.id);
        }}
        key={page.id}
        id={`pageNumber_${page.number}`}
      >{`Page: ${page.number}`}</button>
    );
  });
};

export default SelectPage;
