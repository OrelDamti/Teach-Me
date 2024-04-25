import { Rate } from "antd";
import React from "react";

const Review = ({ onChange, value, ...rest }) => {
  return <Rate onChange={onChange} value={value} {...rest} />;
};

export default Review;
