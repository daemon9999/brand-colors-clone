import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Color } from "components/content-main-components";

const Colors = () => {
  const { searchedBrands } = useSelector((state) => state.brand);

  return (
    <div className="flex-1 pl-2  overflow-auto">
      {searchedBrands.map((b, key) => (
        <Color b={b} key={key} />
      ))}
    </div>
  );
};

export default memo(Colors);
