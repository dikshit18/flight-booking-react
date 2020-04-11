import React, { useState, useEffect } from "react";
import { Form, Button, Select, DatePicker, InputNumber, Switch } from "antd";
import moment from "moment";
const { Option } = Select;
const { RangePicker } = DatePicker;

const BookingForm = props => {
  const { airports } = props;
  const [componentSize, setComponentSize] = useState("large");
  const [flightFrom, updateFrom] = useState(null);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  function onChange(value) {
    updateFrom(value);
  }
  const onFinish = values => {
    console.log("Success:", values);
  };

  const disabledDate = current => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };

  return (
    <div>
      <Form
        onFinish={values => {
          props.formSubmission(values);
        }}
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 18
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item
          label="From"
          name="from"
          rules={[
            {
              required: true,
              message: "Where do you want to board the flight from ?"
            }
          ]}
        >
          <Select
            showSearch
            style={{ width: 450 }}
            placeholder="Select your current location"
            optionFilterProp="children"
            onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option) => {
              return (
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                (option.children[1].props.children[0] &&
                  option.children[1].props.children[0]
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0)
              );
            }}
          >
            {airports && airports.length
              ? airports.map((airport, index) => {
                  return (
                    <Option value={airport.iata} key={index}>
                      <span>{airport.iata}</span>
                      <span style={{ float: "right" }}>
                        {airport.name},{airport.iso}
                      </span>
                    </Option>
                  );
                })
              : null}
          </Select>
        </Form.Item>

        <Form.Item
          label="To"
          name="to"
          rules={[{ required: true, message: "Where are you heading ?" }]}
        >
          <Select
            showSearch
            style={{ width: 450 }}
            placeholder="Select your destination"
            optionFilterProp="children"
            //onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            //onSearch={onSearch}
            filterOption={(input, option) => {
              return (
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                (option.children[1].props.children[0] &&
                  option.children[1].props.children[0]
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0)
              );
            }}
          >
            {airports && airports.length
              ? airports.map((airport, index) => {
                  if (airport.iata === flightFrom) return;
                  return (
                    <Option value={airport.iata} key={index}>
                      <span>{airport.iata}</span>
                      <span style={{ float: "right" }}>
                        {airport.name},{airport.iso}
                      </span>
                    </Option>
                  );
                })
              : null}

            {/* <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option> */}
          </Select>
        </Form.Item>

        <Form.Item
          label="DatePicker"
          name="datePicker"
          rules={[{ required: true, message: "Select your journey dates" }]}
        >
          <RangePicker disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item
          label="Passengers"
          name="passengers"
          rules={[
            { required: true, message: "Select  the number of passengers" }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item style={{ float: "right" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookingForm;
