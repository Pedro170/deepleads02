import { styled } from "styled-components";

export const InputGroup = styled.div`
  input {
    background: ${(props) => props.background};
    border:${(props) => props.border};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    height: 40px;
    text-align: center;
  }
`;

const InputT = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  color: ${(props) => props.cor};
  font-size: 1.25rem;
  outline: none;
  padding: .25rem;

  &::placeholder {
    color: ${(props) => props.corplaceholdereholder};
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
`;

const Input = ({
  label,
  type = "text",
  name,
  id,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <>
      <InputT
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />

      <Label htmlFor={id}>{label}</Label>
    </>
  );
};

export default Input;