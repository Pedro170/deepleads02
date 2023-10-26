import { styled } from "styled-components";
import cores from "../../../styles/paleta";

export const CButton = styled.button`
  display: block;
  width: ${(props) => props.w};
  border-radius: 10px;
  border: none;
  background: ${({ type }) => cores(type)};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.8rem 1.2rem;
  font-size: ${(props) => `${props.fontSize}rem`};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  transition: 0.1s;
  cursor: pointer;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 2px #98d3ff, 0 0 0 3px #2171ac;

    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
