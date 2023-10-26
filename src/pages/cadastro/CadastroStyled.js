import styled from "styled-components";
export const ModalCadastro = styled.div`
  position: absolute;
	top: -10%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 30%;
	min-height: 40px;
	border-radius: .25rem;
	background: var(--cor-00);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	transition: linear .3s;
	padding: 1rem;
	visibility: hidden;

  .mensagem-modal {
    &.mostrar {
      top: 10%;
      visibility: visible;
    }
  }

  p {
    font-size: 1.25rem;
    margin-right: 20px;

    p strong {
      color: #2171ac;
    }
  }
`;
