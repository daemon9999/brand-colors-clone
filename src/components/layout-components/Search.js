import React, { memo } from "react";

const Search = ({ leftComponent, rightComponent }) => {
  return (
    <div className="h-[3.75rem] items-center flex p-[0.938rem] justify-between border-b border-t lg:border-t-none border-border">
      {leftComponent}
      {rightComponent}
    </div>
  );
};

export default memo(Search);
