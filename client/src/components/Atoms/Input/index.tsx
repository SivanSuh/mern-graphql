import React from "react";
import InputProps from "./props";

const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      className="input"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;
