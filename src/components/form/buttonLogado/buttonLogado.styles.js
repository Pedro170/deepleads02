import { styled } from "styled-components";

export const CButton = styled.button`
  display: block;
  width: ${ props => props.w };
  border: none;
  border-radius: 4px;
  background: linear-gradient(180deg, #2171AC 0%, #145B8E 100%);
  padding: .8rem 1.25rem;
  font-size: ${(props) => `${props.fontSize}rem`};
  font-weight: ${ props => props.fontWeight };
  color: ${ props => props.color };
  transition: .1s;
  cursor: pointer;

  &:focus, &:hover {
    box-shadow:
      0 0 0 2px #98D3FF,
      0 0 0 3px #2171AC
    ;

    outline: none;
  }

  &:disabled {
    opacity: .5;
    cursor: wait;
  }
`