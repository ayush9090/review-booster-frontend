import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import exp from "constants";
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
  border-radius: 0.3125rem;
  background: #ece9e9;
`;

export const FlexboxColumn = styled.div`
  display: flex;
  width: 107%;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Inlinebtn = styled.div`
  background-color: #78b2e7;
  height: 40px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background-color: #1d85e4;
  }
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
export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 1px solid black;
`;
