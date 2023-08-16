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
