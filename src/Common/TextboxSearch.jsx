import React from "react";

const TextboxSearch = ({
  type,
  name,
  value,
  onTextChange,
  onKeyDownPress,
  className,
}) => {
  const onChange = (e) => {
    onTextChange(e.target.name, e.target.value);
  };

  const onKeyDown = (e) => {
    onKeyDownPress(e.key);
  };
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={className}
      />
    </>
  );
};

export default TextboxSearch;
