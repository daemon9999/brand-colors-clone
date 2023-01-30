import React from "react";
import {Search} from "components/layout-components";


const Content = ({ leftComponent, rightComponent, main}) => {
  return (
    <div className="flex-1 flex flex-col ">
      <Search leftComponent={leftComponent} rightComponent={rightComponent} />

      {main}
    </div>
  );
};

export default Content;
