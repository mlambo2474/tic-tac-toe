import React, { useContext } from "react";
import ReactDom from "react-dom";
import { ModalContext } from "../../context/ModalContext";
import { ModalBackdrop  } from "./Modal.styled";
import { ModalContainer } from "./Modal.styled";
/**
 * ModalTemplate component that renders a modal using React Portal.
 * It uses the ModalContext to get the modal state and content.
 * @returns {JSX.Element|null} The modal element or null if no modal is open.
 */

const ModalTemplate = () => {
  const { modal, modalContent, handleModal } = useContext(ModalContext);

  if (modal) {
    return ReactDom.createPortal(
      <ModalBackdrop>
        <ModalContainer>{modalContent}</ModalContainer>
      </ModalBackdrop>,
      document.getElementById("modal-root")
    );
  }
  return null;
};

export default ModalTemplate;
