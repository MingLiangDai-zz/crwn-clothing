import React from "react";
import { CustomButtonConatiner } from "./custom-button.styles";

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonConatiner {...otherProps}>{children}</CustomButtonConatiner>
);

export default CustomButton;
