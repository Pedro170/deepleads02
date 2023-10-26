import { P } from "../../../styles/tags";
import { InputT, Label } from "./InputStyled";

const Input = ({
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
      <InputT
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />

      <Label htmlFor={id}>{label}</Label>

      {error && <P className="error-input">{error}</P>}
    </>
  );
};

export default Input;