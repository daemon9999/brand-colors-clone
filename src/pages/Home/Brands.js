import React from "react";
import {Content} from "components/layout-components";
import {Actions, Input} from "components/content-header-components"
import {Colors} from "components/content-main-components"

const Brands = () => {
  return <Content leftComponent={<Input />} rightComponent={<Actions/>} main={<Colors/>} />;
};

export default Brands;
