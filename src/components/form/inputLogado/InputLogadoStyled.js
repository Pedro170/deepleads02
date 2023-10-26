import { styled } from "styled-components";

export const InputGroup = styled.div`
  input {
    background: ${(props) => props.background};
    border:${(props) => props.border};
    border-radius: 10px;
    width: 100%;
    height: 50px;
    transition: linear .3s;

    &:hover, &:focus {
      box-shadow:
        0 0 0 2px #98D3FF,
        0 0 0 3px #2171AC
      ;
    }
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
  padding: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 550;
  color: #002038;
  margin-bottom: .25rem;
`;