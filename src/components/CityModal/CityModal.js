import React from "react";
import { Select } from "antd";

const { Option } = Select;
const onChange = value => {
  console.log(`selected ${value}`);
};

const onBlur = () => {
  console.log("blur");
};

const onSearch = val => {
  console.log("search:", val);
};
const onFocus = () => {
  console.log("focus");
};
const cityModal = props => {
  console.log("props", props);

  return (
    <Select
      showSearch
      size={"large"}
      style={{ width: "100%" }}
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      open={props.open}
      onFocus={onfocus}
      onBlur={props.close}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  );
};

export default cityModal;
