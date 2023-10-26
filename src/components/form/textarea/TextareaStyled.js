import { styled } from "styled-components";
import btn from '../../../image/btn.svg'

export const InputGroup = styled.div`
  width: 60%;
  textarea {
    background: ${(props) => props.background};
    border:${(props) => props.border};
    border-radius: 4px;
  }

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const TextareaT = styled.textarea`
  border: solid 1px #C3C3C3;
  background: transparent;
  width: 100%;
  height: 100%;
  color: ${(props) => props.cor};
  font-size: 1.25rem;
  outline: none;
  padding: 1rem;
  resize: none;

  &::placeholder {
    color: ${(props) => props.corplaceholdereholder};
  }

  @media(max-width: 800px) {
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ButtonGPT = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background: url(${btn});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  @media(max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`