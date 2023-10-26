import React from "react";
import { Label, TextareaT } from "./TextareaStyled";
import { P } from "../../../styles/tags";

const Textarea = ({
  label,
  type = "text",
  name,
  id,
  value,
  error,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>

      <TextareaT
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <P>{error}</P>}
    </>
  );
};

export default Textarea;
