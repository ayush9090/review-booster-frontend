import styled from "styled-components";
import Modal from "react-modal";

export const Okbtn = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #78b2e7;
  color: #fff;
  border: none;
  &:hover {
    background-color: #1d85e4;
  }
`;
export const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-height: 70vh;
  overflow-y: auto;
  background-color: #c4c1c1;
  border-radius: 8px;
  padding: 20px;
`;
