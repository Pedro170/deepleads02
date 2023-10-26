import { P } from "../../../styles/tags";
import { Label, InputT } from "./InputLogadoStyled";

const InputLogado = ({
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

      <InputT
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

export default InputLogado;