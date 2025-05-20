import React from "react";

export default function CustomDropdown({
  option,
  name,
  placeholder,
  onChange,
  options,
  value,
  style,
  onClick,
  id,
  className,
  required,
  readOnly,
}) {
  return (
    <select
      name={name}
      placeholder={placeholder}
      className={className}
      aria-label="Default select example"
      onChange={onChange}
      style={style}
      value={value}
      id={id}
      required={required}
      readOnly={readOnly}
    >
      {options.map((item, index) => {
        return (
          <option key={index} value={item.id}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}
