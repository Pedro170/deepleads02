import { styled } from "styled-components";

export const InputGroup = styled.div`
  input {
    background: ${(props) => props.background};
    border:${(props) => props.border};
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    width: 100%;
    height: 40px;
    text-align: center;
  }
`;

export const InputT = styled.input`
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

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
`;