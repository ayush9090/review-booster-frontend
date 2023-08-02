import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 94vh;
  width: 100vw;
`;
export const Items = styled.div<{ smallscreen: boolean }>`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.smallscreen ? "75%" : "25%")};
  > * {
    margin: 10px 0;
  }
`;
export const Input = styled.input`
  width: 93%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #d9d9d9;
`;
export const SendreviewButton = styled.button`
  width: 50%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #78b2e7;
  color: #fff;
  border: none;
  height: 40px;
`;
export const FlexboxColumn = styled.div`
  display: flex;
  width: 107%;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const AddGuest = styled.div`
  background-color: #78b2e7;
  height: 40px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 4px;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  color: #fcfcfd;
  font-size: 24px;
`;
export const Textspan = styled.span`
  color: #fcfcfd;
  margin-left: 3px;
`;
export const DropdownSelect = styled.select`
  /* Your custom styles here */
  background-color: #78b2e7;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #fcfcfd;
`;

export const DropdownOption = styled.option`
  font-size: 16px;
  background-color: #78b2e7;
  color: #fcfcfd;
`;
