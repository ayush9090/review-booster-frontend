import React from "react";
import Modal from "react-modal";
import { CustomModal, Okbtn } from "./Dialogboxstyle";

interface ExcelErrorDialogProps {
  isOpen: boolean;
  errorMessage?: string;
  MessageType: string;
  onClose: () => void;
  successMessage?: string;
}

const Dialogbox: React.FC<ExcelErrorDialogProps> = ({
  isOpen,
  errorMessage,
  MessageType,
  onClose,
  successMessage,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Excel Error"
    >
      <h2>{MessageType}</h2>
      <p style={{ color: successMessage?.length ? "green" : "red" }}>
        {errorMessage || successMessage}
      </p>
      <Okbtn onClick={onClose}>OK</Okbtn>
    </CustomModal>
  );
};

export default Dialogbox;
