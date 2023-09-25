import React from "react";
import { ModalContent, CModal } from "./ModalStyle";
import { P } from "../../../styles/tags";

const Modal = ({ texto }) => {
	const [ativo, setAtivo] = React.useState(true)
	const fecharModal = () => {
		setAtivo(!ativo)
	}

  return (
    <ModalContent display={ativo ? 'block' : 'none'}>
      <CModal>
				<P>{texto}</P>

				<button onClick={fecharModal} className="fechar-modal">
					&times;
				</button>
			</CModal>
    </ModalContent>
  );
};

export default Modal;
